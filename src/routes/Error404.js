import React from 'react';
import styles from '../css/Error404.module.css';
import commonstyles from '../css/Common.module.css';
import { Link } from 'react-router-dom';

class Error404 extends React.Component{
  render(){
    return (
      <div className={commonstyles.full_width}>
            <div className={commonstyles.area_width}>
              <div className={styles.error_container}>
                <div className={styles.error_image}>
                  <img src="https://image.soribada.com//image/sobanft/images/web/img_w_404error.png" />
                </div>
                <Link to="/">
                  <img src="https://image.soribada.com//image/sobanft/images/web/img_w_btn_gobackhome.png" />
                </Link>
              </div>
            </div>
      </div>
      
      
      
    );
  }
}

export default Error404;
