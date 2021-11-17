import SkillChart from "../components/SkillChart";
import { codingSkills, otherSkills } from "../data/SkillData";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <SkillChart data={codingSkills} subHeading='Coding' />
      <SkillChart data={otherSkills} subHeading='Other Skills' />
    </section>
  );
};

export default Skills;