import "../sytle/detail.css";
import jemo from "../assets/jemo.jpg";

function Details() {
  return (
    <div className="details">
      <img src={jemo} alt="" className="jemopic" />
      <div className="content">
        <div className="header">
          <h1 className="hello">Hello</h1>
          <h1 className="there">There</h1>
        </div>
        <p className="bio">
          Hi l'm Jeremy (aka Jemo) a nigerian and computer science student my main focus is
          using programming to fix problem
        </p>
      </div>
    </div>
  );
}
export default Details;
