const contentText = 
  `Hi, I am Joe Fong. Having graduated from #Northcoders, I am very excited to embark on my journey as a software developer.
  Previously, I have worked in an electronic manufacturer for 10 years. Although my job position wasn't related to software development at all, I have always had a curiosity in coding and I love to adopt it to solve daily problems. I built some Excel VBA macros and little utility scripts in Python to speed up my routine offices works.
  Aside from work,I also enjoyed bashing a kata on codewars or tackling a challenge from project euler.
  Learning something new and tinkle with it never fails to fill me with delight, and that sparks me to pursuit a career as a Software Developer.`

const contents = contentText.split('\n').map(sentence => {
  return <p>{sentence}</p>
})

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2 className="section-title">About me</h2>
      <h3 className="subtitle">Software Engineer</h3>
      <div className="about-me-contents">{contents}</div>
    </section>
  );
};

export default AboutMe;