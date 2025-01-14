import { useEffect } from "react";
import Button from "../common-components/button";
import Layout from "./layout";
import Nav  from "./nav";
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
      <div className="h-screen flex flex-col text-white gap-y-10">
        <div className="w-full flex justify-end">
          <Nav></Nav>
        </div>

        {/* introduction section */}
        <div className="text-3xl w-full lg:w-[75%]">
          <h1
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-primary font-normal text-base mb-5 "
          >
            Hi, my name is
          </h1>
          <h2
            className="font-bold text-7xl text-secondary-100"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            Bereket
          </h2>
          <br />
          <h3
            className="font-bold text-7xl text-secondary-400"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            I build things for web & mobile.
          </h3>

          <p
            className="text-base text-secondary-400 leading-7 mt-10 lg:w-[60%]"
            data-aos="zoom-in"
            data-aos-delay="1200"
          >
            I'm a software engineer specializing in creating robust digital
            solutions. Occasionally, I dabble in design to ensure my work
            isn&#39;t just functional, but also engaging.
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
            Let&#39;s get in touch!
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
      className="flex flex-col items-center cursor-pointer w-full"
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
