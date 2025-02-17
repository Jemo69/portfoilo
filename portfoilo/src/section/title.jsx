import "../sytle/title.css";
import Jemo from "../assets/jemo.jpeg";
import ScrollAnimation from "react-animate-on-scroll";
function Title() {
  return (
    <div className="titlediv">
      <ScrollAnimation animateIn="hinge" duration={.5}>
        <div className="titletext">
          <img className="titleimg" src={Jemo} alt="" />
          <h3 className="title">Jemo's</h3>
          <h1 className="port">Portfolio</h1>
          <p className="quote">
            They tried to rig the game, but you can't fake influence.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
}
export default Title;
