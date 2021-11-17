import outOfOrbitScreenshot from "../assets/pic/out-of-orbit-screenshot.png"
import outOfOrbitDemo from "../assets/pic/out-of-orbit-demo.webp"
import jackOHangmanScreenshot from "../assets/pic/jack-o-hangman-screenshot.png"
import jackOHangmanDemo from "../assets/pic/jack-o-hangman-demo.webp"
import ncBoardGamerScreenshot from "../assets/pic/nc-boardgamers-screenshot.png"
import ncBoardGamerBackendScreenshot from "../assets/pic/nc-broad-gamers.png"


export type ProjectDataFormat = {
  title: string,
  description: string,
  techStack: string[],
  hostedUrl: string,
  repoUrl: string,
  imgUrl: string,
  demoImgUrl?: string,
}

const ProjectData: Array<ProjectDataFormat> = [
  {title: "Out of Orbit",
    description: "A space themed educational game with element of 3D and Augmented Reality. Brings the planets & spacecrafts of our solar system to life in front of your eye.\nBuilt in a team of five members as a final project at #Northcoders.",
    techStack: ["React", "A-Frame", "AR.js", "Firebase"],
    hostedUrl: "https://out-of-orbit.netlify.app/",
    repoUrl: "https://github.com/kapppa-joe/space-app-frontend",
    imgUrl: outOfOrbitScreenshot,
    demoImgUrl: outOfOrbitDemo,}
    ,
    {
      title: "Jack-o-hangman",
      description: "A little word guessing game with a Halloween theme. Built as a personal project to practise using react with CSS animations.\n[ Spoiler: may contain jump scare ]",
      techStack: ["React"],
      hostedUrl: "https://kapppa-joe.github.io/jack-o-hangman/",
      repoUrl: "https://github.com/kapppa-joe/jack-o-hangman",
      imgUrl: jackOHangmanScreenshot,
      demoImgUrl: jackOHangmanDemo,
    },
    {
      title: "NC Boardgamers",
      description: "A discussion website for board games. Built as a front-end project at #Northcoders. Aimed at a clean and sleek design.",
      techStack: ["React"],
      hostedUrl: "https://nc-boardgamers.netlify.app/",
      repoUrl: "https://github.com/kapppa-joe/nc-games",
      imgUrl: ncBoardGamerScreenshot,
    },
    {
      title: "NC Boardgamers (back end)",
      description: "A backend server of NC Boardgamers. Provide access to CRUD operations via a RESTful API.",
      techStack: ["Express.js", "Postgresql"],
      hostedUrl: "https://nc-board-gamers.herokuapp.com/api/",
      repoUrl: "https://github.com/kapppa-joe/backend-project-nc-games",
      imgUrl: ncBoardGamerBackendScreenshot,
    }
]

export default ProjectData