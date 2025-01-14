import type { NextPage } from "next";
import { Hero } from "../components/hero";
import Contact from "../components/contact";
import MyProjects from "../components/my-projects";
import About from "../components/about";
import { useRef, useState } from "react";

const Home: NextPage = ({
  className = "",
}: {
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.9);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.9);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`stars1 font-Montserrat relative bg-background-100 text-white overflow-hidden ${className}`}
    >
      <>
        <div
          className="pointer-events-none inset-0 z-30 transition duration-300 absolute"
          style={{
            background: `radial-gradient(600px at ${position.x}px ${
              position.y
            }px, ${"#1d4ed826"}, transparent 80%)`,
          }}
        />
        <Hero />
        <About />
        <MyProjects />
        <Contact />
      </>
    </div>
  );
};

export default Home;
