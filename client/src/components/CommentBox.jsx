import PropTypes from "prop-types";
import dialogImg from "../assets/images/dialog.png";
import ButtonDelete from "./ButtonDelete";
import ButtonUpdate from "./ButtonUpdate";

function CommentBox({ comments, projectData, onDelete, onEdit }) {
  return (
    <article className="relative">
      {comments
        .filter((comment) => comment.project_id === projectData.id)
        .map((comment) => (
          <header key={comment.id} className="relative mb-8">
            <ul className="flex gap-1 absolute right-4 top-4">
              <li>
                <ButtonUpdate onEdit={() => onEdit(comment)} />
              </li>
              <li>
                <ButtonDelete onDelete={() => onDelete(comment.id)} />
              </li>
            </ul>
            <img src={dialogImg} alt="" className="mt-4" />
            <p className="absolute bottom-20 left-16 -rotate-[14deg]">
              {comment.name}
            </p>
            <p className="absolute bottom-10 left-40 text-white font-light">
              {comment.text}
            </p>
          </header>
        ))}
    </article>
  );
}

CommentBox.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.string,
      text: PropTypes.string.isRequired,
      project_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  projectData: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default CommentBox;
