import PropTypes from "prop-types";
import cross from "../assets/images/Cross.svg";

function ButtonDelete({ onDelete }) {
  return (
    <button
      type="button"
      className="bg-white border-2 border-black active:bg-primary-color"
      onClick={onDelete}
    >
      <img src={cross} alt="supprimer" className="w-6" />
    </button>
  );
}

ButtonDelete.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default ButtonDelete;
