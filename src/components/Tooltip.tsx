const Tooltip = ({
  str,
  isActive = false,
}: {
  str: string;
  isActive: boolean;
}) => {
  if (isActive) {
    return <span className="tooltip">{str}</span>;
  } else {
    return null;
  }
};

export default Tooltip;
