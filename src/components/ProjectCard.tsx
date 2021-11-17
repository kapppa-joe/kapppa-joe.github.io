import { ProjectDataFormat } from "../data/ProjectData";

const ProjectCard = (project: ProjectDataFormat) => {
  return (
    <article className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <div className="project-description">
        {project.description.split('\n').map(str => <p>{str}</p>)}
      </div>
      <div className="project-techstack">
        <label>Tech Stack:</label>
        <div className="project-techstack-tags">{project.techStack.map(tech => <><span>{tech}</span></>)}</div>
      </div>
      <div className="project-img-wrapper"><img className="project-img" src={project.imgUrl} alt={project.title} /></div>
    </article>
  );
};

export default ProjectCard;