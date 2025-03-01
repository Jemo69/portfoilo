import "../sytle/navbar.css";
import Jemo from "../assets/jemo.jpeg";
import { Link } from "react-router-dom";
import github from "../assets/github.png";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbarstart">
        <Link className="logo" to="/">
          <img className="logo" src={Jemo} alt="jemologo" />
        </Link>
      </div>
      <div className="navbaritems">
       Jemo Life    
      </div>
      <div className="navbarend">
        <a className="github" href="https://github.com/Jemo69">
          <img src={github} alt="" />
        </a>
      </div>
    </nav>
  );
}
export default NavBar;
