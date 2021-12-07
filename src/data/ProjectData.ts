import outOfOrbitScreenshot from "../assets/pic/out-of-orbit-screenshot.png";
import outOfOrbitDemo from "../assets/pic/out-of-orbit-demo.webp";
import jackOHangmanScreenshot from "../assets/pic/jack-o-hangman-screenshot.png";
import jackOHangmanDemo from "../assets/pic/jack-o-hangman-demo.webp";
import ncBoardGamerScreenshot from "../assets/pic/nc-boardgamers-screenshot.png";
import ncBoardGamerBackendScreenshot from "../assets/pic/nc-broad-gamers.png";
import pythonSudokuApiScreenshot from "../assets/pic/python-sudoku-api-screenshot.png";
import projectEulerTrialScreenshot from "../assets/pic/project-euler-trial-screenshot.png";

export type ProjectDataFormat = {
  title: string;
  description: string;
  techStack: string[];
  hostedUrl?: string;
  repoUrl: string;
  imgUrl: string;
  demoImgUrl?: string;
  landscapePic?: boolean;
};

const ProjectData: Array<ProjectDataFormat> = [
  {
    title: "Out of Orbit",
    description:
      "A space themed educational game with element of 3D and Augmented Reality. Brings the planets & spacecrafts of our solar system to life in front of your eye.\nBuilt in a team of five members as a final project at #Northcoders.",
    techStack: ["React", "A-Frame", "AR.js", "Firebase"],
    hostedUrl: "https://out-of-orbit.netlify.app/",
    repoUrl: "https://github.com/kapppa-joe/space-app-frontend",
    imgUrl: outOfOrbitScreenshot,
    demoImgUrl: outOfOrbitDemo,
  },
  {
    title: "Jack-o-hangman",
    description:
      "A word guessing minigame with a Halloween theme. Built as a personal project to practise using react with CSS animations.\n[ Spoiler: may contain jump scare ]",
    techStack: ["React"],
    hostedUrl: "https://kapppa-joe.github.io/jack-o-hangman/",
    repoUrl: "https://github.com/kapppa-joe/jack-o-hangman",
    imgUrl: jackOHangmanScreenshot,
    demoImgUrl: jackOHangmanDemo,
  },
  {
    title: "Sudoku API",
    description:
      "A RESTful micro-service webAPI which solves any given Sudoku puzzle or serves a list of Sudoku puzzles with various difficulties. Built as a personal project to practise Python & Flask.",
    techStack: ["Python", "Flask", "SQLAlchemy", "Pytest", "Prosgresql"],
    hostedUrl: "https://sudoku-solver-12345.herokuapp.com/api/",
    repoUrl: "https://github.com/kapppa-joe/python-sudoku-api",
    imgUrl: pythonSudokuApiScreenshot,
    landscapePic: true,
  },
  {
    title: "Project Euler trial",
    description:
      "A collection of my attempts in solving project Euler problems with a functional programming (FP) approach. I started this repo to practise on TDD & FP in Python.",
    techStack: ["Python", "Pytest"],
    repoUrl: "https://github.com/kapppa-joe/project-euler-trial",
    imgUrl: projectEulerTrialScreenshot,
    landscapePic: true,
  },
  {
    title: "NC Boardgamers",
    description:
      "A discussion website for board games. Built as a front-end project at #Northcoders. Aimed at a clean and sleek design.",
    techStack: ["React"],
    hostedUrl: "https://nc-boardgamers.netlify.app/",
    repoUrl: "https://github.com/kapppa-joe/nc-games",
    imgUrl: ncBoardGamerScreenshot,
  },
  {
    title: "NC Boardgamers (back end)",
    description:
      "A backend server of NC Boardgamers. Provide access to CRUD operations via a RESTful API.",
    techStack: ["Express.js", "Postgresql"],
    hostedUrl: "https://nc-board-gamers.herokuapp.com/api/",
    repoUrl: "https://github.com/kapppa-joe/backend-project-nc-games",
    imgUrl: ncBoardGamerBackendScreenshot,
  },
];

export default ProjectData;
