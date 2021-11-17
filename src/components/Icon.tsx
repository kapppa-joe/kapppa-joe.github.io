import SymbolDefs from "../assets/svg/symbol-defs.svg"

const Icon = ({slug = ''}) => {
  return (
    <svg aria-label={slug} className={`icon icon-${slug}`}>
      <use href={`${SymbolDefs}#icon-${slug}`}></use>
    </svg>
  );
};

export default Icon;