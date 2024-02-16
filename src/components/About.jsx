import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-black'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500'>About</p>
        </div>

        <p className='text-xl -tracking-tighter leading-loose'>
          My name is <b>Vipin Kumar</b>, currently pursuing Bachelor of Technology in <b>Computer Science</b>  at <b>Yeshwantrao Chavan Collge Of Engineering, Nagpur.</b>  My skills includes a decent foundation in Python language and javascript, from development perpective, I have done many project in React and Node ( <b>basically MERN</b>  ) for both Mobile and Web and as these are nothing but just Javascript, So, I am well Good in JavaScript Ecosystem. For Computer Science fundamentals, I have a decent knowledge about <i>Data Structure & Algorithm</i>, <i>Operating system </i>, <i>Database management system</i> and <i>Object Oriented Technique</i>. I have also practiced coding by solving over 200+ problems on various coding platforms like Leetcode, GFG and Hackerrank.
          <br /> <br />
          I am an Enthusiastic problem solver and tech enthusiast with a knack for innovation. Thrives in the dynamic world of <b>hackathons</b>, where I've honed my skills in rapid ideation, collaborative coding, and turning ideas into impactful solutions. Eager to take on new challenges and contribute to cutting-edge projects.
        </p>
      </div>
    </div>
  )
}

export default About