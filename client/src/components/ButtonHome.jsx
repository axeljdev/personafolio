import { Link } from "react-router-dom";

function ButtonHome() {
    return (
      <Link to="/Project/1">
          <img src="../src/assets/images/ArrowProject.svg" alt="Vers les projets" className="animate__animated animate__tada"/>
      </Link>
    );
  }
  
  export default ButtonHome;