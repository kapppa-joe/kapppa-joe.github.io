import TypeWriter from "../components/TypeWriter";

const welcomeMsg = "Hey, nice to meet you :)\n" + "> My name is Joe Fong."

const Intro = () => {
  return (
    <section id="intro">
      <div className="welcome-msg">{`> `}<TypeWriter str={welcomeMsg} delayTime={100} /></div>
      {/* {`> Hey, nice to meet you :)`}
      {`> My name is Joe Fong.`} */}
    </section>
  );
};

export default Intro;