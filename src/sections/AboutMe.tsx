const contentText = `Hi, I am <em>Joe Fong</em>. A curious guy who like to explore new things.
Having graduated from the coding boot camp <em>#Northcoders</em> recently, I am now ready to embark on my journey as a software developer.

My previous workplace - a Japanese electronic firm - had piles of unmaintained legacy excel files and VBA macros which we had to run every day. Tinkering and debugging those legacy macros has sparked my interest in coding. Since then, I have developed a little hobby of teaching myself how to code. 
Although my job position wasn't much related to software development, I have always liked to adopt the things I learned to solve some daily problems. I built some Excel <em>VBA macros</em> and little utility scripts in <em>Python</em> to speed up my routine office works.
Aside from work, I also enjoyed bashing a kata on <em>Codewars</em> or tackling a challenge from <em>Project Euler</em>.
<strong>Learning something new and tinkering with it never fails to fill me with delight, and that's what sparks me to pursue a career as a Software Developer.</strong>`;

const contents = contentText.split("\n").map((sentence) => {
  return <p dangerouslySetInnerHTML={{ __html: sentence }}></p>;
});

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <h3 className="subtitle">Software Engineer</h3>
        <div className="about-me-contents">{contents}</div>
      </div>
    </section>
  );
};

export default AboutMe;
