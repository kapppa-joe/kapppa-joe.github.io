import { useEffect, useState, useRef } from "preact/hooks";
import Tooltip from "./Tooltip";

const EmailIconWrapper = ({
  email = "",
  children,
}: {
  email: string;
  children: React.ReactNode;
}) => {
  const initMsg = "click to copy the email address";
  const doneCopyMsg = "copied! 🙂";
  const [isActive, setIsActive] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const tooltipParentRef = useRef<HTMLAnchorElement>(null);

  const handleClick = (e: Event) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setHasCopied(true);
      setIsActive(true);
    });
  };

  const handleHoverFocus = () => {
    if (tooltipParentRef.current) {
      const rect = tooltipParentRef.current.getBoundingClientRect();
      const x = (rect.left + rect.right) / 2;
      const y = (rect.top + rect.bottom) / 2;
      setPos({ x, y });
      setIsActive(true);
    }
  };

  useEffect(() => {});

  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false);
        setIsActive(false);
      }, 1000);
    }
  }, [hasCopied]);

  return (
    <>
      <a
        href={`mailto:${email}`}
        onMouseEnter={handleHoverFocus}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onClick={handleClick}
        ref={tooltipParentRef}
      >
        {children}
      </a>
      <Tooltip
        isActive={isActive}
        str={hasCopied ? doneCopyMsg : initMsg}
        pos={pos}
      />
    </>
  );
};

export default EmailIconWrapper;
