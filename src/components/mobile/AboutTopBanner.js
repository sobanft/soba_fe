import React from 'react';
import styles from '../../css/mobile/AboutTopBanner.module.css';
import '../../css/mobile/AboutSlide.css';
import commonstyles from '../../css/mobile/Common.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


class AboutTopBanner extends React.Component{
  render(){
    return (
      <div className={commonstyles.full_width_colume}>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false} >
          <div className={styles.visual01_container}>
            <img src="https://image.soribada.com/image/sobanft/images/mobile/img_m_visual_about01_kr.png"/>
          </div>
          <div className={styles.visual01_container}>
            <img src="https://image.soribada.com/image/sobanft/images/mobile/img_m_visual_about02_kr.png"/>
          </div>
          <div className={styles.visual01_container}>
            <img src="https://image.soribada.com/image/sobanft/images/mobile/img_m_visual_about03_kr.png"/>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default AboutTopBanner;
