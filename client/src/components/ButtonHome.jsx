import { Link } from "react-router-dom";

function ButtonHome() {
    return (
      <Link to="/Project/1">
          <img src="../src/assets/images/ArrowProject.svg" alt="Vers les projets"/>
      </Link>
    );
  }
  
  export default ButtonHome;