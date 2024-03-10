import React from "react";
import { BiRightArrow } from "react-icons/bi";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import myimage from "../assets/images/myimg.jpeg";
import { Link } from "react-scroll";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Python Developer!", "AI/Ml Enthusiast!", "Web Developer!"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "",
      

    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100  "
    >
      <div className="max-w-screen mx-auto flex flex-col items-center justify-evenly  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full max-sm:mt-16">
          <h2 className="text-6xl max-sm:text-5xl font-bold  text-black">
            Hi, I am Vipin,
          </h2>
          <span
            ref={el}
            className="text-5xl mt-4 max-sm:text-3xl font-bold text-gray-600"
          >
            {" "}
          </span>
          <p className="text-black py-4 max-w-md text-xl">
            I'm a passionate web developer with a deep love for football. I
            proudly support Bayern Munich, my favorite club. Whether coding or
            cheering for Bayern, I find inspiration in every moment!
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tl from-cyan-500 to-blue-700 cursor-pointer"
            >
              Projects &nbsp;
              <span className="group-hover:rotate-90 duration-300">
                <BiRightArrow size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={myimage}
            alt="my-pfp"
            className="rounded-3xl w-64 max-h-96 md:w-full animate-profile_animate max-sm:mb-36 max-sm:mt-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
