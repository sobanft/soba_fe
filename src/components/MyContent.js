import React from 'react';
import styles from '../css/MyContent.module.css';
import commonstyles from '../css/Common.module.css';
import MyContentItem from './MyContentItem';


class MyContent extends React.Component{
  render(){
    const { items } = this.props;
    return (
      <div className={commonstyles.full_width}>
        <div className={commonstyles.area_width}>
          <div className={styles.item_container}>
          { items.map((item, index) => (
            <MyContentItem 
              name={item.product.pd_name}
              id={item.product.pd_idx}
              key={index}
              total={item.product.pd_img_cnt}
              buy_count={item.product.od_count}
              price={item.product.pd_price}
              img_url={item.product.pd_img_url}
            />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MyContent;
