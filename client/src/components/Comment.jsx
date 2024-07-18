import { useState, useEffect } from "react";
import { Form, useNavigate, useLoaderData } from "react-router-dom";
import CommentBox from "./CommentBox";
import ButtonComment from "./ButtonComment";

function Comment() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const project = useLoaderData(); // Assuming project data is loaded using a loader
  const userId = 1; // Replace with actual user ID logic

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/comments`);
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
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/${project.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: comment, userId }),
    });
    if (response.ok) {
      setComment("");
      navigate(0); // Refresh the page to show the new comment
    } else {
      console.error("Failed to post comment");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <section className="bg-primary-color mt-80 transform -skew-x-30">
        <h3 className="text-white text-4xl -rotate-6 mb-2 p-8 text-shadow-title">
          COMMENTAIRES
        </h3>
        <CommentBox comments={comments} />
        <textarea
          name="comment"
          id="comment"
          className="w-[90%] h-32 p-4 ml-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-color"
          placeholder="Laissez votre commentaire ici..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <ButtonComment />
      </section>
    </Form>
  );
}

export default Comment;