// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { useTransition, animated } from 'react-spring';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import Preloader from './components/Preloader';

function App() {
  const [allComponentsLoaded, setAllComponentsLoaded] = useState(false);

  const handleFinishLoading = () => {
    setAllComponentsLoaded(true);
  };

  const transitions = useTransition(allComponentsLoaded, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    // Simulate any additional loading or setup here

    // Set a timeout to finish loading after a certain duration
    const loadingTimeout = setTimeout(() => {
      handleFinishLoading();
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <NavBar />
              <Home />
              <About />
              <Projects />
              <Skills />
              <SocialLinks />
              <Contact />
            </animated.div>
          )
      )}
      {!allComponentsLoaded && <Preloader onFinishLoading={handleFinishLoading} />}
    </div>
  );
}

export default App;
