import React, { useEffect, useRef } from "react";

export default function Skills() {
  const skillsAndTools: string[] = [
    "JavaScript",
    "TypeScript",
    "React JS",
    "Next JS",
    "Node JS",
    "Express JS",
    "Nest JS",
    "Prisma ORM",
    "Tailwind CSS",
    "Bootstrap",
    "Ant Design",
    "styled-components",
    "Git",
    "Figma",
    "Adobe XD",
    "HTML",
    "CSS",
    "MongoDB",
    "GraphQL",
    "Python",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "Flutter",
    "Dart",
    "Android",
    "Firebase",
    "REST API",
    "Docker",
    "Google Cloud",
  ];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerId = "myCanvas";
  const listId = "tagList";

  useEffect(() => {
    // We only call TagCanvas.Start if the global TagCanvas object is available.
    // This code runs on the client side after the script loads.
    if (typeof window !== "undefined" && (window as any).TagCanvas) {
      try {
        (window as any).TagCanvas.Start(containerId, listId, {
          textColour: "#ffffff",
          outlineColour: "transparent",
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.02,
          zoom: 0.9,
          shuffleTags: true,
          fadeIn: 3000,
          initial: [0.3, -0.1],
        });
      } catch (error) {
        console.error("TagCanvas error:", error);
      }
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-4">
      {/* Canvas container */}
      <div style={{ position: "relative" }}>
        <canvas
          ref={canvasRef}
          id={containerId}
          width={400}
          height={400}
        ></canvas>

        {/* Hidden UL that TagCanvas uses to create tags */}
        <ul id={listId} style={{ display: "none", color: "#ffffff" }}>
          {skillsAndTools.map((tag, index) => (
            <li key={index}>
              <a onClick={(e) => e.preventDefault()}>{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
