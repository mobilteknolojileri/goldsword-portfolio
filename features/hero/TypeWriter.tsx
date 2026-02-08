"use client";

import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={["Full Stack Developer", 3000, "Product Engineer", 3000]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="gradient-text"
    />
  );
};

export default TypeWriter;
