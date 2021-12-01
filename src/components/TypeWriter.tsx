import { useState, useEffect } from "preact/hooks";

const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

interface props {
  str: string;
  delayTime?: number;
  play?: boolean;
  showCursor?: boolean;
  wrapInPTag?: boolean;
  displayFunc?: Function | null;
}

const TypeWriterCursor = () => {
  return <span className="typewriter-cursor">|</span>;
};

const TypeWriter = ({
  str = "",
  delayTime = 50,
  play = true,
  showCursor = false,
  displayFunc = null,
}: props) => {
  const [text, setText] = useState<Array<string>>([]);
  const [finishedTyping, setFinishedTyping] = useState(false);
  const startTyping = async (ref: { isMounted: boolean }) => {
    setFinishedTyping(false);
    for (let i = 0; i < str.length; i++) {
      let nextText = str.slice(0, i + 1).split("\n");
      await delay(delayTime);
      if (ref.isMounted) {
        setText(nextText);
      }
    }
    setFinishedTyping(true);
  };

  useEffect(() => {
    const ref = { isMounted: true };
    if (play) {
      startTyping(ref);
    }
    return () => {
      ref.isMounted = false;
    };
  }, [play]);

  return (
    <>
      <span
        className={`typewriter-text ${
          finishedTyping ? "finished-typing" : "typing"
        }`}
      >
        {displayFunc ? displayFunc(text) : text}
      </span>
      {showCursor && <TypeWriterCursor />}
    </>
  );
};

export default TypeWriter;
