import { SkillDataType } from "../data/SkillData";
import SkillBar from "./SkillBar";

const SkillChart = ({
  subHeading,
  data,
}: {
  subHeading: string;
  data: SkillDataType[];
}) => {
  return (
    <div className="skills-chart">
      <h4 className="skills-chart-subheading">{subHeading}</h4>
      <div className="skillbar-wrapper">
        {data.map((skill) => SkillBar(skill))}
      </div>
    </div>
  );
};

export default SkillChart;
