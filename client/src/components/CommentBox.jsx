import PropTypes from 'prop-types';
import dialogImg from "../assets/images/dialog.png";
import ButtonDelete from './ButtonDelete';
import ButtonUpdate from './ButtonUpdate';


function CommentBox({comments}) {
  return (
    <article className="relative">
      {comments.map((comment)=> (
        <>
        <ul className='absolute right-16 bottom-[5.7rem] -rotate-[4deg] flex gap-1'>
          <li>
        <ButtonUpdate/>
        </li>
        <li>
        <ButtonDelete/>
        </li>
        </ul>
      <img src={dialogImg} alt="" />
      <p className=" -rotate-[14deg] absolute bottom-[4.9rem] left-[4rem]">
        {comment.name}
      </p>
      <p className=" text-white font-light absolute bottom-[2rem] left-[8rem]">
        {comment.text}
      </p>
      </>
      ))}
    </article>
  );
}

CommentBox.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CommentBox;