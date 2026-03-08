"use client";

import { useEffect, useState } from "react";

const TypeWriter = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Full Stack Developer",
    "Product Engineer",
    "Freelancer Yazılım Geliştirici",
    "Mobil Uygulama Geliştirici",
    "AI Entegrasyon Uzmanı",
    "QuSafe Geliştiricisi",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <span className="text-secondary-600 dark:text-secondary-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;
