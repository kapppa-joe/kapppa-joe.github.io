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


const TypeWriterCursor = () => {
  return (<span className="typewriter-cursor">|</span>)
}

const TypeWriter = ({ str = "", delayTime = 50, play = true, showCursor =  true }:props) => {
  const [text, setText] = useState("");
  const startTyping = async () => {
    for (let i = 0; i < str.length; i++) {
      const nextText = str.slice(0, i + 1);
      await delay(delayTime);
      setText(nextText);
    }
  };
  useEffect(() => {
    if (play) {
      startTyping();
    }
  }, [play]);

  return (
    <><span className="typewriter-text">{text}</span>{showCursor && <TypeWriterCursor />}</>
  );
};

export default TypeWriter;
