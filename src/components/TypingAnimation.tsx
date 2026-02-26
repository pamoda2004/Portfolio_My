import { useState, useEffect } from "react";

const words = ["Web Developer", "ML Enthusiast", "Problem Solver", "UI Designer"];

const TypingAnimation = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
