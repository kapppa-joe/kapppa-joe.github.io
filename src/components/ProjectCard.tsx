import { useState } from "preact/compat";
import useWindowDimensions from "../utils/useWindowDimensions";
import { ProjectDataFormat } from "../data/ProjectData";

const ProjectCard = (project: ProjectDataFormat) => {
  return (
    <article className="project-card">
      <div className="project-text-wrapper">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-description">
          {project.description.split("\n").map((str) => (
            <p>{str}</p>
          ))}
        </div>
        <div className="project-techstack">
          <label>Tech Stack:</label>
          <div className="project-techstack-tags">
            {project.techStack.map((tech) => (
              <>
                <span>{tech}</span>
              </>
            ))}
          </div>
        </div>
        <div className="link-wrapper">
          <a className="button" href={project.hostedUrl} target="_blank">
            Demo
          </a>
          <a className="button" href={project.repoUrl} target="_blank">
            Github Repo
          </a>
        </div>
      </div>
      <ProjectImage {...project} />
    </article>
  );
};

const Image = ({ url, title }: { url: string; title: string }) => {
  return <img className="project-img" src={url} alt={title} />;
};

const largeScreenBreakpoint = 992;

const ProjectImage = (project: ProjectDataFormat) => {
  const { width } = useWindowDimensions();
  if (!project.demoImgUrl || width <= largeScreenBreakpoint) {
    return (
      <div className="project-img-wrapper">
        <a href={project.hostedUrl} target="_blank">
          <Image url={project.imgUrl} title={project.title} />
        </a>
      </div>
    );
  } else {
    const [isHover, setIsHover] = useState(false);
    return (
      <div
        className="project-img-wrapper"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <small>⬇ Try hover on the image! </small>
        <a href={project.hostedUrl} target="_blank">
          {isHover ? (
            <Image url={project.demoImgUrl} title={project.title} />
          ) : (
            <Image url={project.imgUrl} title={project.title} />
          )}
        </a>
      </div>
    );
  }
};

export default ProjectCard;
