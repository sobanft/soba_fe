import React from 'react';
import AboutTopBanner from '../../components/mobile/AboutTopBanner'
import AboutContent from '../../components/mobile/AboutContent'


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
