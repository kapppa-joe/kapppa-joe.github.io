import TypeWriter from "../components/TypeWriter";

const welcomeMsg = "Hey, nice to meet you :)\n" + "My name is Joe Fong."

const Intro = () => {
  return (
    <section id="intro">
      <div className="welcome-msg"><TypeWriter str={welcomeMsg} delayTime={100} wrapInPTag={true}/></div>
    </section>
  );
};

export default Intro;