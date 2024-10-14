import { useEffect, useState } from "react";

function TextChange({ texts }: { texts: string[] }) {
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      // add 5 to wait the end value mostly
      if (endValue >= texts[index].length + 2) {
        setIsForward(false);
      }
      if (endValue === 0) {
        setIsForward(true);
        if (index < texts.length - 1) {
          setIndex((prev) => prev + 1);
        } else {
          setIndex(0);
        }
        setEndValue(1);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="transition-all ease duration-300 text-inherit">
      <span>{currentText} </span>
      <span className={`${endValue === 0 ? "invisible" : "visible"}`}>|</span>
    </div>
  );
}

export default TextChange;
