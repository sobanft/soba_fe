import React from 'react';
import styles from '../css/TopBanner.module.css';
import '../css/TopBannerSlide.css';
import commonstyles from '../css/Common.module.css';
import style from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


class TopBanner extends React.Component{
  render(){
    return (
      <div className={commonstyles.full_width}>
            <div className={commonstyles.area_width}>
              <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} width={1920} >
                <Link to={`/sobakit/`} className={styles.visual01_container}>
                  <img src="https://image.soribada.com/image/sobanft/images/web/img_w_visual01.png"/>
                </Link>
                <Link to={`/signup/`} className={styles.visual01_container}>
                  <img src="https://image.soribada.com/image/sobanft/images/web/img_w_visual02.png"/>
                </Link>
                <Link to={`/sobakit/`} className={styles.visual01_container}>
                  <img src="https://image.soribada.com/image/sobanft/images/web/img_w_visual03.png"/>
                </Link>
              </Carousel>
            </div>
      </div>
    );
  }
}

export default TopBanner;
