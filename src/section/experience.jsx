import Language from "../component/language";
import Project from "../component/project";
import python from "../assets/python.svg";
import javascript from "../assets/javascript.svg";
import html from "../assets/html-5.svg";
import css from "../assets/css3.svg";
import "../sytle/experience.css";
import react from '../assets/react.svg'
function Experience() {
  const projects = [
    {
      id: 1,
      title: "alarm",
      techstack: "python",
      link: "https://github.com/Jemo69/alarmclock",
    },
  ];
  const langs = [
    { id: 1, name: "python", img: python },
    { id: 2, name: "javascript", img: javascript },
    { id: 3, name: "html/css", img: html },
    { id: 4,  name: "React" , img : react },
  ];

  return (
    <div className="experience">
      <div className="languagediv">
        <h1 className="socialstext">My Techncals skill</h1>
        <div className="lang">
          {langs.map((lang) => (
            <Language lang={lang} key={lang.id} />
          ))}
        </div>
      </div>
      <div className="jemodiv">
        <h1 className="socialstext">My Projects</h1>
        <div className="jemo">
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Experience;
