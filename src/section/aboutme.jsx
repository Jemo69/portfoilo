import Details from "../component/details";
import Socials from "../component/socials";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import react from "../assets/react.svg";
import "../sytle/aboutme.css";
import FadeInOverlay from "../component/animatmatedsection";
import ScrollAnimation from "react-animate-on-scroll";
function Aboutme() {
  const medias = [
    { id: 1, img: github, name: "Github", link: "https://github.com/Jemo69" },
    {
      id: 2,
      img: linkedin,
      name: "Linkedin",
      link: "https:/www.linkedin.com/in/ifeanyichukwu-nwachukwe-69bb751ba",
    },
    { id: 3, img: mail, name: "Mail", link: "mailto:jemolife69@gmail.com" },
  ];

  return (
    <div className="aboutme">
      <div className="">
        <ScrollAnimation
          animateIn="fadeIn"
          duration={100}
          animateOut="flipOutY"
          initiallyVisible={true}
        >
          <Details />
        </ScrollAnimation>
      </div>

      <div className="socials">
        <h1 className="socialstext">my socials</h1>
        <ScrollAnimation animateIn="bounceInRight" duration={50}>
          <div className="socialsdiv">
            {medias.map((media) => (
              <Socials media={media} key={media.id} />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
export default Aboutme;
