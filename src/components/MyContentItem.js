import React from 'react';
import styles from '../css/MyContentItem.module.css';
import { Link } from 'react-router-dom';


class MyContentItem extends React.Component{
  
  render(){
    const { id, name, total, buy_count, img_url } = this.props;
    return (
      <div className={styles.item_contaner}>
        <div className={styles.item_img_box}>
          <img className={styles.item_img} src={img_url} />
        </div>
        <div className={styles.item_volume_box}>
          <p className={styles.item_volume}>New</p>
        </div>
        <div className={styles.item_title_box}>
          <p className={styles.item_title}>{name}</p>
        </div>
        <div>
          <Link to={`/sobakit/product/`+id} className={styles.nav_menu0}>
            <img src="https://image.soribada.com/image/sobanft/images/web/img_w_btn_viewdetail.png" />
          </Link>
        </div>
        
      </div>
    );
  }
}

export default MyContentItem;
