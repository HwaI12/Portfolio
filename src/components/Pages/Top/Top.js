import React from 'react';
import TopProfile from './TopProfile';
import AboutMe from './AboutMe';
import News from './News';
import Works from './Works';
import Skill from './Skill';

const HomePage = () => {
  return (
    <div className="container text-center">
      <TopProfile />
      <AboutMe />
      <News />
      <Works />
      <Skill />
    </div>
  );
};

export default HomePage;
