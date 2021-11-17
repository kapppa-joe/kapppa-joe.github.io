import { default as NavButton, NavButtonProps } from "./NavButton";

const sections: NavButtonProps[] = [
  { str: "Home", linkTo: "#intro" },
  { str: "About me", linkTo: "#about-me" },
  { str: "Projects", linkTo: "#projects" },
  { str: "Contact", linkTo: "#contact" },
];

const NavBar = () => {
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
