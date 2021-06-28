import React from 'react';
import styles from '../../css/mobile/SobaContentItem.module.css';
import { Link } from 'react-router-dom';


class SobaContentItem extends React.Component{
  render(){
    const { id, name, total, buy_count, price, img_url } = this.props;
    const numberWithCommas = (num) => {
      return String(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
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
        <div className={styles.item_count_box}>
          <p className={styles.item_count_left}>Edition</p>
          <p className={styles.item_count_right}>{buy_count} of {total}</p>
        </div>
        <div className={styles.item_price_box}>
          <p className={styles.item_price_left}>Price</p>
          <p className={styles.item_price_right}>{numberWithCommas(price)} SOBA</p>
        </div>
        <div>
          <Link to={`/sobakit/product/`+id} className={styles.nav_menu0}>
            <img className={styles.item_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_btn_viewdetail.png" />
          </Link>
        </div>
        
      </div>
    );
  }
}

export default SobaContentItem;
