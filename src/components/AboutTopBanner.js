import React from 'react';
import styles from '../css/AboutTopBanner.module.css';
import '../css/AboutSlide.css';
import commonstyles from '../css/Common.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


class AboutTopBanner extends React.Component{
  render(){
    return (
      <div className={commonstyles.full_width}>
            <div className={commonstyles.area_width}>
              <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false} width={1920} >
                <div className={styles.visual01_container}>
                  <img src="https://image.soribada.com/image/sobanft/images/web/img_w_visual_about01_kr.png"/>
                </div>
                <div className={styles.visual01_container}>
                  <img src="https://image.soribada.com/image/sobanft/images/web/img_w_visual_about02_kr.png"/>
                </div>
                <div className={styles.visual01_container}>
                  <img src="https://image.soribada.com/image/sobanft/images/web/img_w_visual_about03_kr.png"/>
                </div>
              </Carousel>
              
            </div>
      </div>
    );
  }
}

export default AboutTopBanner;
