import TypeWriter from "../components/TypeWriter";

const welcomeMsg = "Hey, nice to meet you :)\n" + "My name is Joe Fong.";
const wrapEmoji = (str: string) => {
  const idx = str.indexOf(":)");
  if (idx >= 0) {
    return (
      <p>
        {str.slice(0, idx)}
        <span className="emoji">:)</span>
        {str.slice(idx + 2)}
      </p>
    );
  } else {
    return <p>{str}</p>;
  }
};

const curryToArrFunc = (func: (str: string) => any) => {
  return (strArr: Array<string>) => {
    return strArr.map((str) => func(str));
  };
};

const Intro = () => {
  return (
    <section id="intro">
      <div className="welcome-msg">
        <TypeWriter
          str={welcomeMsg}
          delayTime={100}
          displayFunc={curryToArrFunc(wrapEmoji)}
        />
      </div>
    </section>
  );
};

export default Intro;
