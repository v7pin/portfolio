import React from "react";

const ProjectCard = ({
  id,
  src,
  name,
  description,
  tools,
  viewLink,
  sourceCodeLink,
}) => (
  <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden duration-200 hover:scale-105">
    <img src={src} alt="" className="rounded-md h-80 object-cover w-full " />
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="mb-4 flex flex-row">
        <a
          href={viewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 px-6 py-3 mr-2 bg-blue-700  text-white text-center font-semibold rounded-md shadow-md hover:scale-105"
        >
          View
        </a>
        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 px-6 py-3 ml-2 bg-blue-700 text-white text-center font-semibold rounded-md shadow-md hover:scale-105"
        >
          Source Code
        </a>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold mb-2">{name}</p>
        <p className="text-base font-semibold text-gray-800 mb-2 font-raleway">{description}</p>
        <p className="text-base text-blue-900 font-bold">{tools}</p>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: "mealmatter.png",
      name: "MealMatters",
      description:
        "Streamlining food donations with React-powered UI, live geolocation, and Twilio integration for instant alerts. ",
      tools: "React,TailwindCSS, NodeJS, Twilio",
      viewLink: "https://mealmatters.netlify.app",
      sourceCodeLink: "https://github.com/v7pin/mealmatters",
    },

  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 text-black md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Projects
          </p>
          <p className="py-3 text-xl mt-3">Check out some of my projects</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
