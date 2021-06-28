import React from 'react';
import styles from '../css/AboutContent.module.css';
import commonstyles from '../css/Common.module.css';


class AboutContent extends React.Component{
  state = {
    email : '',
    data : [],
    checkFlag : false,
    checkView : false,
  }  
  render(){
    return (
      <div className={commonstyles.full_width}>
            <div className={commonstyles.area_width}>
              <div className={styles.visual01_container}>
                <img src="https://image.soribada.com/image/sobanft/images/web/img_w_about01_kr.png"/>
              </div>
            </div>
      </div>
    );
  }
}

export default AboutContent;
