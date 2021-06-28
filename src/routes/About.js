import React from 'react';
import AboutTopBanner from '../components/AboutTopBanner'
import AboutContent from '../components/AboutContent'


class About extends React.Component{
  render(){
    return (
      <div>
        <AboutTopBanner />
        <AboutContent />
      </div>
      
    );
  }
}

export default About;
