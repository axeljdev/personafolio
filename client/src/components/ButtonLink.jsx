import "animate.css";
import PropTypes from "prop-types";
import { useState } from "react";

function ButtonLink({ link }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      window.location.href = link;
    }, 2000);
  };

  return (
    <a
      href={`${link}`}
      className={`transform-link bg-white hover:bg-primary-color hover:text-white text-secondary-color text-4xl w-36 h-16 pt-2 mt-3 -rotate-5 text-center ${isClicked ? "animate__animated animate__hinge" : ""}`}
      onClick={handleClick}
    >
      Voir
    </a>
  );
}

ButtonLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ButtonLink;
