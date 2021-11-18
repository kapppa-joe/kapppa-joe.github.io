const Tooltip = ({
  str,
  isActive = false,
  pos = null,
  offsetX = 0,
  offsetY = 18,
}: {
  str: string;
  isActive: boolean;
  pos: { x: number; y: number } | null;
  offsetX?: number;
  offsetY?: number;
}) => {
  if (isActive && pos) {
    return (
      <span
        className="tooltip"
        style={{ top: pos.y + offsetY, left: pos.x + offsetX }}
      >
        {str}
      </span>
    );
  } else {
    return null;
  }
};

export default Tooltip;
