import { Link } from "react-router-dom";

function Return() {
  return (
    <Link to="/">
      <img
        src="../src/assets/images/ArrowBack.svg"
        alt="Retour"
        className="mt-10 animate__animated animate__tada"
      />
    </Link>
  );
}

export default Return;
