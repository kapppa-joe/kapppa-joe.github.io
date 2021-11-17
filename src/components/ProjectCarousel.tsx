import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectData";
import "preact/compat";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel/lib/js";
import useWindowDimensions from "../hooks/useWindowDimensions";

const carouselSettings = {
  centerMode: true,
  centerSlidePercentage: "70%",
  infiniteLoop: true,
};

const tabletBreakpoint = 768;

const arrowButton =
  (direction: string) =>
  (onClickHandler: () => void, hasPrevOrNext: boolean, label: string) => {
    return (
      <button
        className={`arrow-button arrow-button-${direction}`}
        onClick={onClickHandler}
        aria-label={label}
      >
        <svg className="arrow-svg" viewBox="0 0 100 100">
          <path
            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
            className="arrow"
          ></path>
        </svg>
      </button>
    );
  };

const ProjectCarousel = () => {
  const { width } = useWindowDimensions();

  return (
    <Carousel
      infiniteLoop={true}
      centerMode={width > tabletBreakpoint}
      centerSlidePercentage="70"
      selectedItem={1}
      renderArrowPrev={arrowButton("prev")}
      renderArrowNext={arrowButton("next")}
      showThumbs={false}
    >
      {ProjectData.map((project) => (
        <ProjectCard {...project} />
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
