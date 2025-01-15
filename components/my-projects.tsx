import {
  DotImage,
  SherpaImage1,
  SherpaImage2,
  AggregateImage1,
  AggregateImage2,
  Koalo,
  Koalo1,
} from "../assets";
import Image, { StaticImageData } from "next/image";
import Layout from "./layout";
import { useState } from "react";
import Modal from "../common-components/modal";
import Button from "../common-components/button";

interface ProjectProps {
  title: string;
  description: React.ReactNode;
  images: StaticImageData[];
  tags: string[];
  reverse?: boolean;
  url?: string;
}
export default function MyProjects() {
  const [showModal, setShowModal] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );

  const projects: ProjectProps[] = [
    {
      title: "Koalo",
      description: (
        <>
          I worked on a robust platform enabling{" "}
          <span className="text-primary">creators,</span>{" "}
          <span className="text-primary">businesses,</span>{" "}
          <span className="text-primary">communities,</span> to rapidly launch
          their own branded apps. I engineered features like{" "}
          <span className="text-primary">community chats,</span>{" "}
          <span className="text-primary">exclusive broadcasts,</span> and
          <span className="text-primary"> subscription models,</span> boosting
          engagement and revenue.
          <br></br>
          <br></br>
          Leveraging <span className="text-primary"> CodeMagic scripts,</span> I
          streamlined the white-labeling process for faster, more consistent app
          deployment. Collaborating with cross-functional teams and integrated
          third-party services.
        </>
      ),
      tags: [
        "Flutter",
        "Dart",
        "Firebase",
        "White Label",
        "In-App Purchases",
        "Push Notifications",
        "Chat",
        "Live Streaming",
      ],
      images: [Koalo, Koalo1],
      reverse: false,
      url: "https://www.koalo.app/",
    },
    {
      title: "Sherpa document generator",
      description: (
        <>
          Sherpa-Document Generator is a{" "}
          <span className="text-primary">
            {" "}
            Retrieval-Augmented Generation (RAG) system
          </span>
          , that streamlines the proposal creation process. Users can log any
          interactions they’ve had with clients, and the system automatically
          generates customized proposals based on that data. I contributed to
          the full-stack development of this platform—building the{" "}
          <span className="text-primary">front end with Next.js</span>, the{" "}
          <span className="text-primary">back end with FastAPI</span>, and
          implementing a robust{" "}
          <span className="text-primary">RAG pipeline</span> that integrates
          relevant data sources.
        </>
      ),
      tags: ["Next.js", "Python", "FastAPI", "RAG", "TailwindCSS"],
      images: [SherpaImage1, SherpaImage2],
      reverse: true,
    },
    {
      title: "Aggregate Intellect",
      description: (
        <>
          At Aggregate Intellect, I contributed to a web platform that
          accelerates the exploration and prototyping of machine learning
          technologies. As a full-stack developer, I built an interactive{" "}
          <span className="text-primary">concept graph visualization</span>{" "}
          using
          <span className="text-primary">D3.js</span> and{" "}
          <span className="text-primary">React Force Graph</span>. This feature
          enables users to visualize connections between ML concepts and filter
          resources by relevance. I also implemented resource creation, editing,
          and reorganization, simplifying content management. By focusing on
          clarity and performance, I ensured a more intuitive user experience.
          These enhancements empower users to rapidly iterate on new ideas and
          drive innovation forward.
        </>
      ),
      tags: [
        "Next.js",
        "Styled Components",
        "NestJS",
        "GraphQl",
        "PostgreSQL",
        "TypeScript",
      ],
      images: [AggregateImage1, AggregateImage2],
      reverse: false,
      url: "https://www.ai.science/",
    },
    {
      title: "Gamma Time",
      description: (
        <>
          During my time at Gamma, I developed “Gamma Time,” a short-form,
          mobile-first video entertainment app. I focused on{" "}
          <span className="text-primary">optimizing video load times</span> and
          enhancing the user experience, ensuring captivating and accessible
          content. I implemented <span className="text-primary">AdMob</span> and{" "}
          <span className="text-primary">in-app purchases</span>, boosting
          revenue streams. I also{" "}
          <span className="text-primary">
            led a small, agile development team
          </span>
          , accelerating feature rollouts and ensuring timely updates.
        </>
      ),
      tags: [
        "Flutter",
        "Dart",
        "Firebase",
        "In-App Purchases",
        "AdMob",
        "Push Notifications",
        "Video Streaming",
      ],
      images: [Koalo1],
      reverse: true,
      url: "https://apps.apple.com/us/app/gamma-time/id6504227709",
    },
  ];

  const handleProjectClick = (project: ProjectProps) => {
    if (project.url != null) {
      window.open(project.url, "_blank");
      return;
    }
    setSelectedProject(project);
    setShowModal(true);
  };
  const visibleProjects = seeMore ? projects : projects.slice(0, 3);
  return (
    <section id="projects">
      <Layout>
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center mt-20 mb-12">
            <h3 className="text-3xl font-semibold text-[#ccd6f6] mr-4">
              My Projects{" "}
            </h3>
            <div className="h-[1px] w-[23%] bg-background-300 rounded-sm"></div>
          </div>

          <div className="w-full flex flex-col justify-center items-center gap-y-20">
            {visibleProjects.map((project) => (
              <Project
                key={project.title}
                {...project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
            <Button
              onClick={() => setSeeMore(!seeMore)}
              className="px-5 py-2 text-md"
            >
              {seeMore ? "See Less" : "See More"}
            </Button>
          </div>
          {selectedProject && (
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title={selectedProject.title}
              description={selectedProject.description}
              images={selectedProject.images}
              // tags={selectedProject.tags}
            />
          )}
        </div>
      </Layout>
    </section>
  );
}

function Project({
  reverse = false,
  title,
  description,
  tags,
  images,
  onClick,
}: ProjectProps & {
  onClick?: () => void;
}) {
  return (
    <div
      className={`relative flex w-full max-w-5xl flex-col items-start text-secondary-100 text-sm leading-relaxed p-8 cursor-pointer overflow-hidden hover:bg-[rgba(148,163,184,0.1)] gap-y-5 rounded-lg md:flex-col lg:flex-row 
        ${reverse ? "lg:flex-row-reverse" : ""}`}
      onClick={onClick}
    >
      {/* Left Column */}
      <div
        className={`relative flex flex-col flex-1 z-10  ${
          reverse ? "text-end" : ""
        }`}
      >
        <h3 className="mb-6 text-xl text-secondary-100 ">{title}</h3>

        {/* Description Card */}
        <div className="mb-8 rounded-sm bg-[#112240] p-6">
          <p className="text-secondary-400">{description}</p>
        </div>

        {/* Technologies List */}
        <div
          className={`flex flex-wrap gap-3 ${
            reverse ? "justify-end" : "justify-start"
          }`}
        >
          {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center rounded-full bg-[#2dd4bf1a] px-3 py-1 text-xs font-medium text-[#5eead4] "
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Right Column (Image + Overlay) */}
      <div
        className={`relative ${
          reverse ? "lg:mr-[-70px]" : "lg:ml-[-70px]"
        }  h-[250px] w-[370px] overflow-hidden rounded-sm group z-0  md:h-[250px] md:w-[370px] lg:h-[330px] lg:w-[580px]`}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-[#64ffda] opacity-25 transition-opacity duration-300 group-hover:opacity-0" />
        {/* Image */}
        <Image
          src={images[0]}
          layout="fill"
          objectFit="fill"
          className="absolute h-full w-full object-cover -z-10 transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
    </div>
  );
}
