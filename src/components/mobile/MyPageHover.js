import React from 'react';
import styles from '../../css/mobile/MyPageHover.module.css';
import commonstyles from '../../css/mobile/Common.module.css';
import { Link } from 'react-router-dom';


class MyPageHover extends React.Component{
  render(){
    return (
      <div className={styles.item_contaner}>
        <Link to={`/mypage/profile`} className={styles.hover_menu0}>
          <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav05_01_off.png" />
        </Link>
        <Link to={`/mypage/mycollection/`} className={styles.hover_menu1}>
          <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav05_02_off.png" />
        </Link>
        <Link to={`/mypage/mywallet/`} className={styles.hover_menu2}>
          <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav05_03_off.png" />
        </Link>
        <Link to={`/logout/`} className={styles.hover_menu3}>
          <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav05_04_off.png" />
        </Link>
      </div>
    );
  }
}

export default MyPageHover;
