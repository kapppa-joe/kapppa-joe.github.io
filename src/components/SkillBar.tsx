import { SkillDataType } from "../data/SkillData";
import Icon from "./Icon";

const SkillBar = ({name, slug, value, description}: SkillDataType) => {
  
  return (
    <div className="skillbar">
      <Icon slug={slug} />
      <label>{name}</label>
      <span className="empty-bar">
        <span className="filled-bar" style={{width: `${value * 100}%`}}>
          <small>{description}</small>
        </span>
      </span>
    </div>
  );
};

export default SkillBar;