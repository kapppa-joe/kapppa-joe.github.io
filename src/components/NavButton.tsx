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

const NavButton = ({ str, linkTo }: NavButtonProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const isActive = isFocus || isHover;

  return (
    <HashLink
      to={linkTo}
      smooth
      className="nav-button"
      onFocus={() => setIsFocus(true)}
      onMouseEnter={() => setIsHover(true)}
      onBlur={() => setIsFocus(false)}
      onMouseLeave={() => setIsHover(false)}
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
