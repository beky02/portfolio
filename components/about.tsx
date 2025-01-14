import { useEffect } from "react";
import Layout from "./layout";
import Skills from "./skills";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  // Optimize AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
      });
    };

    initAOS();
    window.addEventListener("resize", initAOS);
    return () => window.removeEventListener("resize", initAOS);
  }, []);
  return (
    <section id="about">
      <Layout>
        <div className="w-full flex flex-col items-center justify-end gap-x-20 lg:flex-row lg:items-center lg:justify-end">
          <div className="flex flex-col text-secondary-100 leading-relaxed lg:w-1/2">
            <div className="flex items-center mb-12">
              <h3 className="text-3xl font-semibold mr-4">About Me </h3>
              <div className="h-0.5 w-[50%] bg-primary rounded-sm"></div>
            </div>
            <div className="flex flex-col gap-y-8 font-normal">
              <p data-aos="fade-right" data-aos-delay="600">
                Hi, I&#39;m a Flutter and Full Stack Developer who&#39;s
                passionate about building innovative mobile and web
                applications. Proficient in Flutter, React.js, Next.js, FastAPI,
                and Nest.js. Every day, I dive into creating smooth,
                user-friendly experiences that make a difference in people&#39;s
                lives. From designing intuitive interfaces to ensuring
                everything runs flawlessly, I genuinely love what I do.
              </p>
              <p data-aos="fade-right" data-aos-delay="800">
                I&#39;m also proficient in Generative AI (GenAI) and
                Retrieval-Augmented Generation (RAG), integrating cutting-edge
                AI technologies into my projects to create smarter and more
                dynamic applications. This expertise allows me to deliver
                solutions that not only meet but exceed user expectations.
              </p>
              <p data-aos="fade-right" data-aos-delay="1000">
                I&#39;m all about collaboration and continuous learning. The
                tech world is always evolving, and I&#39;m here for it—always
                eager to pick up new skills and stay ahead of the curve.{" "}
              </p>
              <p data-aos="fade-right" data-aos-delay="1200">
                Here are the technologies I&#39;ve been working with recently:
              </p>
            </div>
          </div>
          <div className=" w-1/2 " data-aos="zoom-in" data-aos-delay="1000">
            <Skills />
          </div>
        </div>
      </Layout>
    </section>
  );
}
