import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({text}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        } else {
          setIsDeleting(true);
          setSpeed(50);
        }
      } else {
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
          setSpeed(100);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, speed]);

  return (
    <div className="text-1xl font-bold text-green-800 w-fit">
      {displayedText.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="mr-2">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
      <motion.span
        className="ml-1  w-1 bg-gray-800"
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </div>
  );
};

export default TypingEffect;
