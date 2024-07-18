import dialogImg from "../assets/images/dialog.png";


function CommentBox() {
  return (
    <section className="relative">
      <img src={dialogImg} alt="" />
      <p className=" -rotate-[14deg] absolute bottom-[4.3rem] left-[4rem]">
        Joker
      </p>
      <p className=" text-white font-light absolute bottom-[2rem] left-[8rem]">
        Super projet !
      </p>
    </section>
  );
}

export default CommentBox;