import ProjectCarousel from "../components/ProjectCarousel";

const carouselSettings = {
  centerMode: true,
  centerSlidePercentage: "70%",
  infiniteLoop: true,
};

const tabletBreakpoint = 768;

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="subtitle">Some of the things I've made...</p>
        <ProjectCarousel />
      </div>
    </section>
  );
};

export default Projects;
