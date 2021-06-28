import React from 'react';
import styles from '../../css/mobile//TopBanner.module.css';
import '../../css/mobile//TopBannerSlide.css';
import commonstyles from '../../css/mobile//Common.module.css';
import style from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


class TopBanner extends React.Component{
  render(){
    return (
      <div className={commonstyles.full_width}>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false} >
          <Link to={`/sobakit/`} className={styles.visual01_container}>
            <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_visual01.png"/>
          </Link>
          <Link to={`/signup/`} className={styles.visual01_container}>
            <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_visual02.png"/>
          </Link>
          <Link to={`/sobakit/`} className={styles.visual01_container}>
            <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_visual03.png"/>
          </Link>
        </Carousel>
      </div>
    );
  }
}

export default TopBanner;
