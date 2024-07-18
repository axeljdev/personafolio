import 'animate.css';
import PropTypes from 'prop-types';

function ButtonLink({link}) {
  return (
    <a
      href={`${link}`} className="transform-link bg-white text-secondary-color text-4xl w-36 h-16 pt-2 mt-3 -rotate-5 text-center"
    >
      Voir
    </a>
  )
}

ButtonLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ButtonLink