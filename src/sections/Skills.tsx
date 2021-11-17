import SkillChart from "../components/SkillChart";
import { codingSkills, otherSkills } from "../data/SkillData";

const Skills = () => {
  return (
    <section id="skills">
      <h3 className="subtitle">Skills</h3>
      <SkillChart data={codingSkills} subHeading="Coding" />
      <SkillChart data={otherSkills} subHeading="Other Skills" />
    </section>
  );
};

export default Skills;
