import React from 'react';
import styles from '../css/SobaBottom.module.css';
import commonstyles from '../css/Common.module.css';
import { Link } from 'react-router-dom';

class SobaBottom extends React.Component{
  render(){
    return (
      <div className={commonstyles.full_width}>
            <div className={commonstyles.area_width}>
              <div className={styles.bottom_container}>
                <img src="https://image.soribada.com/image/sobanft/images/web/img_w_aboutsoba03_background.png" />
                <div className={styles.text_container}>
                  <img src="https://image.soribada.com/image/sobanft/images/web/img_w_aboutsoba01_title.png" />
                </div>
                <Link to={`/about/`} className={styles.button_container}>
                  <img src="https://image.soribada.com/image/sobanft/images/web/img_w_aboutsoba02_btn.png" />
                </Link>
                
              </div>
            </div>
      </div>
    );
  }
}

export default SobaBottom;
