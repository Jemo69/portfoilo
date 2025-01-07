import "../sytle/project.css";
function Project({ project }) {
  return (
    <div className="project">
      <h4 className="projectid">Project:{project.id}</h4>
      <h2 className="projecttitle">Project name: {project.title}</h2>
      <p className="projectstack">project stack: {project.techstack}</p>
      <p>
        <a href={project.link} className="projectbtn">
          See the code
        </a>
      </p>
    </div>
  );
}
export default Project;
