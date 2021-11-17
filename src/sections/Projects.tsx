import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectData";
import 'preact/compat'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel/lib/js';
import useWindowDimensions from "../hooks/useWindowDimensions";

const carouselSettings = {
  centerMode: true,
  centerSlidePercentage: "70%",
  infiniteLoop: true
}

const tabletBreakpoint = 768

const Projects = () => {
  const { width } = useWindowDimensions()

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="subtitle">Some of the things I've made...</p>
      <Carousel infiniteLoop={true} centerMode={width > tabletBreakpoint} centerSlidePercentage="70">
        {ProjectData.map(project => <ProjectCard {...project} />)}
      </Carousel>
    </section>
  );
};

export default Projects;