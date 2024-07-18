import { useState, useEffect } from "react";
import { Form, useNavigate, useLoaderData } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import CommentBox from "./CommentBox";
import ButtonComment from "./ButtonComment";

function Comment({ projectData }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState("");
  const navigate = useNavigate();
  const project = useLoaderData(); // Assuming project data is loaded using a loader
  const userId = 1; // Replace with actual user ID logic

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/comments`
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error("Failed to fetch comments");
      }
    };

    fetchComments();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = editingCommentId
      ? `${import.meta.env.VITE_API_URL}/api/comments/${editingCommentId}`
      : `${import.meta.env.VITE_API_URL}/api/projects/${project.id}/comments`;
    const method = editingCommentId ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: commentText, userId }),
    });

    if (response.ok) {
      setCommentText("");
      setEditingCommentId(null);
      navigate(0); // Refresh the page to show the new comment
    } else {
      console.error(
        `Failed to ${editingCommentId ? "update" : "post"} comment`
      );
    }
  };

  const handleDelete = async (commentId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/comments/${commentId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      setComments(comments.filter((comment) => comment.id !== commentId));
    } else {
      console.error("Failed to delete comment");
    }
  };

  const handleEdit = (comment) => {
    setCommentText(comment.text);
    setEditingCommentId(comment.id);
  };

  return (
    <section className="bg-primary-color mt-12 transform ">
      <h3 className="text-white text-4xl -rotate-6 mb-2 p-8 text-shadow-title">
        COMMENTAIRES
      </h3>
      <Form onSubmit={handleSubmit}>
        <CommentBox
          comments={comments}
          projectData={projectData}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
        <textarea
          name="comment"
          id="comment"
          className="w-[90%] h-32 p-4 ml-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-color  transform-link"
          placeholder="Laissez votre commentaire ici..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <ButtonComment />
      </Form>
    </section>
  );
}

Comment.propTypes = {
  projectData: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Comment;
