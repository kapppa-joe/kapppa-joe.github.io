import { useState, useEffect } from "preact/hooks";

const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

interface props {
  str: string
  delayTime?: number,
  play?: boolean,
  showCursor?: boolean
}

const addLineBreak = (stringArr:string[]): (string|JSX.Element)[] => {
  let result = [];
  for (let i = 0; i < stringArr.length; i++) {
    result.push(stringArr[i])
    if (i !== stringArr.length - 1) {
      result.push(<br />)
    }
  }
  return result;
}

const TypeWriterCursor = () => {
  return (<span className="typewriter-cursor">|</span>)
}

const TypeWriter = ({ str = "", delayTime = 50, play = true, showCursor =  true }:props) => {
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
      {text.length > 1 ? addLineBreak(text) : text}
    </span>{showCursor && <TypeWriterCursor />}</>
  );
};

export default TypeWriter;
