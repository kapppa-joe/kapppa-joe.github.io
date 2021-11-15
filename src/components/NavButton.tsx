import {useState} from 'preact/hooks';
import TypeWriter from './TypeWriter';

export interface NavButtonProps {
  str: string
  linkTo: string
}

const makeCodingStyleString = (str: string): string => {
  if (str.includes(" ")) {
    const [a, b] = str.toLowerCase().split(" ");
    return `.${a}(${b})`;
  } else {
    return `.${str.toLowerCase()}()`
  }
}

const NavButton = ({str, linkTo}: NavButtonProps) => {
  const [isActive, setIsActive] = useState(false)
  
  return (<a href={linkTo} className="nav-button" onFocus={() => setIsActive(true)} onMouseEnter={() => setIsActive(true)} onBlur={() => setIsActive(false)} onMouseLeave={() => setIsActive(false)}>
      <NavButtonContent str={str} isActive={isActive} />
    </a>)
};

interface NavButtonContentProps {
  isActive: boolean,
  str: string
}


const NavButtonContent = ({isActive, str}: NavButtonContentProps) => {
  if (isActive) {
    return (
      <span style={{display: "inline-block", minWidth: `${str.length * 9 + 36}px`}}>
        <TypeWriter str={makeCodingStyleString(str)} />
      </span>
    );
  } else {
    return (
      <span style={{display: "inline-block", minWidth: `${str.length * 9 + 36}px`}}>
        {str}
      </span>)
  }
};

export default NavButton;