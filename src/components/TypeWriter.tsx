import { useState, useEffect } from "preact/hooks";

const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

interface props {
  str: string
  delayTime?: number,
  play?: boolean,
  showCursor?: boolean
  wrapInPTag?: boolean
}

const pTagMap = (stringArr:string[]): (JSX.Element)[] => {
  return stringArr.map(str => {
    return (<p>{str}</p>)
  })
}

const TypeWriterCursor = () => {
  return (<span className="typewriter-cursor">|</span>)
}

const TypeWriter = ({ str = "", delayTime = 50, play = true, showCursor =  false, wrapInPTag = false }:props) => {
  const [text, setText] = useState<Array<string>>([]);
  const startTyping = async (ref:{isMounted: boolean}) => {
    for (let i = 0; i < str.length; i++) {
      let nextText = str.slice(0, i + 1).split("\n");
      await delay(delayTime);
      if (ref.isMounted) {
        setText(nextText);
      }
    }
  };

  useEffect(() => {
    const ref = {isMounted: true}
    if (play) {
      startTyping(ref);
    }
    return () => {
      ref.isMounted = false;
    }
  }, [play]);

  return (
    <><span className="typewriter-text">
      {wrapInPTag ? pTagMap(text) : text}
    </span>{showCursor && <TypeWriterCursor />}</>
  );
};

export default TypeWriter;
