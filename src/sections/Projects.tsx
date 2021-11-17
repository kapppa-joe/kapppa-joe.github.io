import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectData";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="subtitle">Some of the things I've made...</p>

      {ProjectData.map(project => <ProjectCard {...project} />)}

    </section>
  );
};

export default Projects;