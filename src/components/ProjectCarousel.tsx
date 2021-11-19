// @ts-nocheck
// tsc error involves type issues from 3rd party library. ignore here.
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectData";
import "preact/compat";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useGuessDevice from "../utils/useGuessDevice";

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
  const { isTouchDevice } = useGuessDevice();

  return (
    <Carousel
      infiniteLoop={true}
      centerMode={!isTouchDevice}
      centerSlidePercentage={70}
      selectedItem={0}
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
