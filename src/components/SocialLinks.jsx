import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaFilePen } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import resumePDF from "../assets/resume.pdf"
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <BsLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/v7pin/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/v7pin",
    },
    {
      id: 3,
      child: (
        <>
          Gmail <IoMdMail size={30} />
        </>
      ),
      href: "mailto:vipin333kvk@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaFilePen size={30} />
        </>
      ),
      href: resumePDF,
      download: true,
      style: "rounded-br-md",
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col fixed top-[35%] left-0  ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md bg-blue-950 " +
              " " +
              style
            }
          >
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
