import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import Globe from './components/Globe';
import Carousel from './components/Carousel';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';


const App = () => {
  const bottomRef = useRef(null);
  const TeamRef = useRef(null);

  return (
    <div className="App">
      <HeroSection bottomRef={bottomRef} />
      <Globe />
      <Carousel TeamRef={TeamRef} />
      <SocialMedia TeamRef={TeamRef} />
      <Footer />
    </div>
  );
};

export default App;