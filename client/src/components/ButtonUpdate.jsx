import PropTypes from "prop-types";
import edit from "../assets/images/edit.svg";

function ButtonUpdate({ onEdit }) {
  return (
    <button
      type="button"
      className="bg-white border-2 border-black focus:bg-primary-color"
      onClick={onEdit}
    >
      <img src={edit} alt="modifier" className="w-6" />
    </button>
  );
}

ButtonUpdate.propTypes = {
  onEdit: PropTypes.func.isRequired,
};

export default ButtonUpdate;
