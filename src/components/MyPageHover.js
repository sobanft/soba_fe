import React from 'react';
import styles from '../css/MyPageHover.module.css';
import { Link } from 'react-router-dom';


class MyPageHover extends React.Component{
  render(){
    return (
      <div className={styles.item_contaner}>
        <Link to={`/mypage/profile`} className={styles.hover_menu}>
          <img src="https://image.soribada.com/image/sobanft/images/web/img_w_top_nav05_01_off.png" />
        </Link>
        <Link to={`/mypage/mycollection/`} className={styles.hover_menu}>
          <img src="https://image.soribada.com/image/sobanft/images/web/img_w_top_nav05_02_off.png" />
        </Link>
        <Link to={`/mypage/mywallet/`} className={styles.hover_menu}>
          <img src="https://image.soribada.com/image/sobanft/images/web/img_w_top_nav05_03_off.png" />
        </Link>
        <Link to={`/logout/`} className={styles.hover_menu}>
          <img src="https://image.soribada.com/image/sobanft/images/web/img_w_top_nav05_04_off.png" />
        </Link>
      </div>
    );
  }
}

export default MyPageHover;
