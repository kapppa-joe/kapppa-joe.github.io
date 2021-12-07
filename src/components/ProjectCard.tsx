import { useState } from "preact/compat";
import useGuessDevice from "../utils/useGuessDevice";
import { ProjectDataFormat } from "../data/ProjectData";

const ProjectCard = (project: ProjectDataFormat) => {
  return (
    <article
      className={`project-card ${
        project.landscapePic && "project-landscape-pic"
      }`}
    >
      <div className="project-text-wrapper">
        <h3 className="project-title">{project.title}</h3>
        {project.landscapePic && <ProjectImage {...project} />}
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
          {project.hostedUrl && (
            <a className="button" href={project.hostedUrl} target="_blank">
              Live Demo
            </a>
          )}
          <a className="button" href={project.repoUrl} target="_blank">
            See the code
          </a>
        </div>
      </div>
      {project.landscapePic || <ProjectImage {...project} />}
    </article>
  );
};

const Image = ({
  url,
  title,
  className = "",
}: {
  url: string;
  title: string;
  className?: string;
}) => {
  return <img className={`project-img ${className}`} src={url} alt={title} />;
};

const SwipeHelper = () => {
  return (
    <div
      className="project-swipe-helper"
      onTouchStart={(e) => {
        e.stopPropagation();
      }}
    ></div>
  );
};

const ProjectImage = (project: ProjectDataFormat) => {
  const { isLargeScreen, isTouchDevice } = useGuessDevice();
  if (project.demoImgUrl && isLargeScreen) {
    return <ProjectImageWithDemo {...project} />;
  } else {
    return (
      <div className="project-img-wrapper">
        {isTouchDevice && <SwipeHelper />}
        <a href={project.hostedUrl} target="_blank">
          <Image url={project.imgUrl} title={project.title} />
        </a>
      </div>
    );
  }
};

const ProjectImageWithDemo = (project: ProjectDataFormat) => {
  const [isHover, setIsHover] = useState(false);
  const [demoImgLoaded, setDemoImgLoaded] = useState(false);
  const showDemo = isHover && demoImgLoaded;

  return (
    <div
      className="project-img-wrapper"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {demoImgLoaded && <small>⬇ Try hover on the image! </small>}
      <a href={project.hostedUrl} target="_blank">
        <img
          className={`project-img ${showDemo || "hidden"}`}
          src={project.demoImgUrl}
          alt={project.title}
          onLoad={() => setDemoImgLoaded(true)}
        />
        <Image
          url={project.imgUrl}
          title={project.title}
          className={showDemo ? "hidden" : ""}
        />
      </a>
    </div>
  );
};

export default ProjectCard;
