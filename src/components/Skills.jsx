import React from 'react';
import htmlLogo from "../assets/images/logo.png";

const Skills = () => {
  const tech = [
    {
      category: 'Languages',
      skills: [
        {
          id: 1,
          src: "python.png",
          title: "Python",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: "html.png",
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 3,
          src: "css.png",
          title: "CSS",
          style: "shadow-orange-500",
        },
        {
          id: 4,
          src: "js.png",
          title: "JavaScript",
          style: "shadow-orange-500",
        },
      ],
    },
    {
      category: 'Tools/Database',
      skills: [
        {
          id: 5,
          src: "nodejs.png",
          title: "Node.js",
          style: "shadow-orange-500",
        },
        {
          id: 6,
          src: "mongodb.png",
          title: "MongoDB",
          style: "shadow-orange-500",
        },
        {
          id: 7,
          src: "expressjs.png",
          title: "Express",
          style: "shadow-orange-500",
        },
        {
          id: 8,
          src: "github.png",
          title: "Git",
          style: "shadow-orange-500",
        },
      ],
    },
    {
      category: 'Framework/Library',
      skills: [
        {
          id: 9,
          src: "reactjs.png",
          title: "React",
          style: "shadow-orange-500",
        },
        {
          id: 10,
          src: "Tensorflow.png",
          title: "TensorFlow",
          style: "shadow-orange-500",
        },
        {
          id: 11,
          src: "sklearn.png",
          title: "SkLearn",
          style: "shadow-orange-500",
        },
      ],
    },
  ];

  return (
    <div name="skills" className="bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 p-2">
            Skills
          </p>
          <p className="py-6 text-xl mt-3">These are the tech I've worked with</p>
        </div>
        {tech.map(({ category, skills }) => (
          <div key={category} className="flex items-center py-8 px-12 sm:px-0 max-sm:flex max-sm:flex-col max-sm:ml-16 max-sm:mr-16 ">
            <div className="flex flex-col items-center space-y-4 mr-12">
              <p className="text-2xl font-bold capitalize ">{category}</p>
            </div>
            <div className="flex items-center space-x-8">
              {skills.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden  hover:scale-125 ease-in duration-300 hover:border-4`}
                >
                  <img
                    src={src}
                    alt={`${title} icon`}
                    className="w-full h-full object-contain rounded-full "
                  />
                  <p className="absolute top-0 left-full ml-2 flex items-center justify-center text-xl font-bold">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
