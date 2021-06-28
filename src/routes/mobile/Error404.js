import React from 'react';
import styles from '../../css/mobile/Error404.module.css';
import commonstyles from '../../css/mobile/Common.module.css';
import { Link } from 'react-router-dom';

class Error404 extends React.Component{
  render(){
    return (
      <div className={commonstyles.full_width_colume}>
        <div className={styles.error_container}>
          <div className={styles.error_image}>
            <img className={commonstyles.image_width} src="https://image.soribada.com//image/sobanft/images/mobile/img_m_404error.png" />
          </div>
          <Link to="/" className={styles.backhome_image}>
            <img className={commonstyles.image_width} src="https://image.soribada.com//image/sobanft/images/mobile/img_m_btn_gobackhome.png" />
          </Link>
        </div>
      </div>
      
      
      
    );
  }
}

export default Error404;
