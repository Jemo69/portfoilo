import "../sytle/socials.css";
function Socials({ media }) {
  return (
    <div className="socialdiv">
      <img src={media.img} alt="" className="socialimg" />
      <div>
        <h2>
          <a className="socialname" href={media.link}>
            {media.name}
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Socials;
