import { useState } from "preact/hooks";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Intro from "./sections/Intro";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ThemeToggleButton from "./components/ThemeToggleButton";

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode((curr) => !curr);

  return (
    <BrowserRouter>
      <div id="app" data-theme={isDarkMode ? "dark" : "light"}>
        <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <NavBar />
        <div id="sections-wrapper">
          <Intro />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}
