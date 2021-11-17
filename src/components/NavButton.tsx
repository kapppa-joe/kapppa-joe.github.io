import { useState } from "preact/hooks";
import { HashLink } from "react-router-hash-link";
import TypeWriter from "./TypeWriter";

export interface NavButtonProps {
  str: string;
  linkTo: string;
}

const makeCodingStyleString = (str: string): string => {
  if (str.includes(" ")) {
    const [a, b] = str.toLowerCase().split(" ");
    return `.${a}(${b})`;
  } else {
    return `.${str.toLowerCase()}()`;
  }
};

const scrollWithOffset = (el: HTMLElement) => {
  console.log(el, "<---- el");
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const NavButton = ({ str, linkTo }: NavButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <HashLink
      to={linkTo}
      smooth
      // scroll={(el) => scrollWithOffset(el)}
      className="nav-button"
      onFocus={() => setIsActive(true)}
      onMouseEnter={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
    >
      <NavButtonContent str={str} isActive={isActive} />
    </HashLink>
  );
};

interface NavButtonContentProps {
  isActive: boolean;
  str: string;
}

const NavButtonContent = ({ isActive, str }: NavButtonContentProps) => {
  if (isActive) {
    return (
      <span
        className="nav-button-text"
        data-req-width={`${str.length * 10 + 42}px`}
      >
        <TypeWriter str={makeCodingStyleString(str)} />
      </span>
    );
  } else {
    return (
      <span
        className="nav-button-text"
        data-req-width={`${str.length * 10 + 42}px`}
      >
        {str}
      </span>
    );
  }
};

export default NavButton;
