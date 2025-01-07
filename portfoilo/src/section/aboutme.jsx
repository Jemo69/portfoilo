import Details from "../component/details";
import Socials from "../component/socials";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import "../sytle/aboutme.css";
function Aboutme() {
  const medias = [
    { id: 1, img: github, name: "Github", link: "https://github.com/Jemo69" },
    {
      id: 2,
      img: linkedin,
      name: "Linkedin",
      link: "www.linkedin.com/in/ifeanyichukwu-nwachukwe-69bb751ba",
    },
    { id: 3, img: mail, name: "Mail", link: "mailto:jemolife69@gmail.com" },
  ];

  return (
    <div className="aboutme">
      <Details />
      <div className="socials">
        <h1 className="socialstext">my socials</h1>
        <div className="socialsdiv">
          {medias.map((media) => (
            <Socials media={media} key={media.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Aboutme;
