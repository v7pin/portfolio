import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaTimes, FaBars } from 'react-icons/fa';
const NavBar = () => {


  const [nav, setNav] = useState(false);
  const [showTitle, setShowTitle] = useState(true);


  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTitle(false);
      } else {
        setShowTitle(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-transparent fixed">
      <div>
        <h1 className={`text-3xl font-start ml-3  ${!showTitle && 'hidden md:block'}`}> v7pin</h1>
      </div>
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-xl capitalize text-black hover:scale-110 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-100 to-white text-center ease-in duration-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-black py-6 text-4xl hover:scale-105 duration-200"
            ><Link onClick={() => setNav(false)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default NavBar;