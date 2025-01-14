import { useEffect } from "react";
import Button from "../common-components/button";
import Layout from "./layout";
import { Nav } from "./nav";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  // Optimize AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener("resize", initAOS);
    return () => window.removeEventListener("resize", initAOS);
  }, []);
  return (
    <Layout>
      <div className="h-screen flex flex-col items-center text-white gap-y-10">
        <div className="w-full flex justify-end">
          <Nav></Nav>
        </div>

        {/* introduction section */}
        <div className="text-5xl w-full">
          <p data-aos="zoom-in" data-aos-delay="600">
            Hello,
          </p>
          <br />
          <p data-aos="zoom-in" data-aos-delay="800">
            I am <span className="text-primary">Bereket,</span>
          </p>
          <br />
          {/* <p>Front End and Mobile App Developer </p> */}
          <div data-aos="zoom-in" data-aos-delay="1000">
            <TypeAnimation
              sequence={[
                "Fullstack and",
                1000,
                "Fullstack and Mobile App Developer",
                1000,
                "F",
              ]}
              speed={30}
              deletionSpeed={30}
              cursor={false}
              repeat={Infinity}
            />
          </div>
          <p data-aos="zoom-in" data-aos-delay="1200">
            <span className="text-2xl text-secondary">
              Currently Located in Ethiopia, I love building{" "}
              <span className="text-primary ">intractive</span>, digital
              experiences on the web
            </span>
          </p>
        </div>
        <div
          className="flex justify-start w-full"
          data-aos="zoom-in"
          data-aos-delay="1400"
        >
          <Button
            className="px-20 py-5 text-xl"
            onClick={() => {
              window.location.href = "mailto:berekettadege09@gmail.com";
            }}
          >
            Let's get in touch!
          </Button>
        </div>

        {/* mouse indicator to scroll down */}
        <MouseScrollIndicator />
      </div>
    </Layout>
  );
};

const MouseScrollIndicator = () => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      data-aos="fade-down"
      data-aos-delay="1600"
      onClick={() => {
        window.scrollBy({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
    >
      <div className="flex flex-col items-center h-14 w-7 border-solid border-primary border-2 rounded-[14px] mt-24">
        <div className="h-2 w-2 mt-2 rounded-full bg-primary animate-bounce"></div>
      </div>
      <div className="relative mt-2">
        <div className="w-4 h-4 border-solid border-transparent border-l-primary border-b-primary border-2 -rotate-45 animate-scroll-arrow"></div>
        <div className="w-4 h-4 border-solid border-transparent border-l-primary border-b-primary border-2 -rotate-45 animate-scroll-arrow delay-150"></div>
        <div className="w-4 h-4 border-solid border-transparent border-l-primary border-b-primary border-2 -rotate-45 animate-scroll-arrow delay-300"></div>
      </div>
    </div>
  );
};
