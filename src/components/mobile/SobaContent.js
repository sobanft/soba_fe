import React from 'react';
import styles from '../../css/mobile//SobaContent.module.css';
import commonstyles from '../../css/mobile//Common.module.css';
import SobaContentItem from '../../components/mobile//SobaContentItem';


class SobaContent extends React.Component{
  render(){
    const { items } = this.props;
    
    return (
      <div className={commonstyles.full_width}>
        <div className={styles.item_container}>
        { items.map((item, index) => (
          <SobaContentItem 
            name={item.pd_name}
            id={item.pd_idx}
            key={index}
            total={item.pd_img_cnt}
            buy_count={item.od_count}
            price={item.pd_price}
            img_url={item.pd_img_url}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default SobaContent;
