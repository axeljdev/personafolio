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
          <header key={comment.id}>
            <ul
              className="absolute right-16 bottom-[5.7rem] -rotate-[4deg] flex gap-1"
            >
              <li>
                <ButtonUpdate onEdit={() => onEdit(comment)} />
              </li>
              <li>
                <ButtonDelete onDelete={() => onDelete(comment.id)} />
              </li>
            </ul>
            <img src={dialogImg} alt="" className="mt-4"/>
            <p className=" -rotate-[14deg] absolute bottom-[4.9rem] left-[4rem]">
              {comment.name}
            </p>
            <p className=" text-white font-light absolute bottom-[2.5rem] left-[8rem]">
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