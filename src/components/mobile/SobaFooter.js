import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/mobile/SobaFooter.module.css';
import commonstyles from '../../css/mobile/Common.module.css';

class SobaFooter extends React.Component{
  render(){
    return (
      <div className={commonstyles.full_width}>
        <div className={styles.footer_container}>
            <div className={styles.footer_logo_container}>
                <img className={styles.footer_logo_image} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_footer_logo.png" />
                
            </div>

            <div className={styles.footer_nav_container}>
                  <Link to="/notice" className={styles.footer_menu0}><img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_footer_nav01.png" /></Link>
                  <Link to="/terms" className={styles.footer_menu1}><img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_footer_nav02.png" /></Link>
                  <Link to="/privacy" className={styles.footer_menu2}><img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_footer_nav03.png" /></Link>
                  <a href="mailto:admin@sobanft.com" className={styles.footer_menu3}><img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_footer_nav04.png" /></a>
            </div>
            <p className={styles.footer_copy}>Copyright © Soba Platform. All Rights Reserved</p>
          
        </div>
      </div>
    );
  }
}

export default SobaFooter;
