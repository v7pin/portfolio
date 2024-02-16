import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Lottie from 'react-lottie';
import greetingAnimation from '../assets/animations/Naamaste.json'; 
import backgroundImage from '../assets/images/preloaderbg.jpg'; // Replace with the actual path

const Preloader = ({ onFinishLoading }) => {
  const [loading, setLoading] = useState(true);
  const languages = ['नमस्ते'];

  const springProps = useSpring({
    opacity: loading ? 1 : 0,
    scale: loading ? 1 : 0.8,
    onRest: () => {
      if (!loading) {
        onFinishLoading();
      }
    },
  });

  useEffect(() => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const displayGreetings = async () => {
      await delay(2000);
      setLoading(false);
    };

    displayGreetings();
  }, [onFinishLoading]);

  return (
    <animated.div
      className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center text-4xl"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className="mb-2 text-8xl font-yatra drop-shadow-2xl text-black">{languages[0]}</div>
      <div className="w-48 h-48">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: greetingAnimation,
          }}
          height={200}
          width={200}
        />
      </div>
    </animated.div>
  );
};

export default Preloader;
