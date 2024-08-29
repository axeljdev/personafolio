import { Link } from "react-router-dom";
import arrowProject from "../assets/images/ArrowProject.svg";

function ButtonHome() {
    return (
      <Link to="/Project/1">
          <img src={arrowProject} alt="Vers les projets" className="animate__animated animate__tada"/>
      </Link>
    );
  }
  
  export default ButtonHome;