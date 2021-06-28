import React from 'react';
import styles from '../../css/mobile//SobaBottom.module.css';
import commonstyles from '../../css/mobile//Common.module.css';
import { Link } from 'react-router-dom';

class SobaBottom extends React.Component{
  render(){
    return (
      <div className={commonstyles.full_width}>
        <div className={styles.bottom_container}>
          <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_aboutsoba03_background.png" />
          <div className={styles.text_container}>
            <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_aboutsoba01_title.png" />
          </div>
          <Link to={`/about/`} className={styles.button_container}>
            <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_aboutsoba02_btn.png" />
          </Link>
        </div>
      </div>
    );
  }
}

export default SobaBottom;
