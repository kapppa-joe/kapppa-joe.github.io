import { default as NavButton, NavButtonProps } from "./NavButton";
import withinView from "../utils/withinView";
import useScrollPosition from "../utils/useScrollPosition";

const sections: NavButtonProps[] = [
  { str: "Home", linkTo: "#intro" },
  { str: "About me", linkTo: "#about-me" },
  { str: "Projects", linkTo: "#projects" },
  { str: "Contact", linkTo: "#contact" },
];

const NavBar = () => {
  useScrollPosition(
    () => {
      console.log(withinView("#about-me"), "<-- about me in view");
    },
    [],
    500
  );

  return (
    <nav id="main-nav" role="navigation">
      <ul id="nav-menu">
        {sections.map((navButtonProps) => (
          <li className="nav-item">{NavButton(navButtonProps)}</li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
