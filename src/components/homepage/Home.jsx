import React from 'react';
import Welcome from './Welcome';
import AboutMe from './AboutMe';
import MySkill from './MySkill';
import Certificate from '../certificate/Certificate';
import HireBox from '../HireBox'

const Home = () => {

  return (
    <div>
        <div>
          <Welcome />
          <AboutMe />
          <MySkill />
          <Certificate />
          <HireBox />
        </div>
        
    </div>
  )
}

export default Home