import React from 'react';
import styles from '../../css/mobile/AboutContent.module.css';
import commonstyles from '../../css/mobile/Common.module.css';


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
        <div className={styles.visual01_container}>
          <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_about01_kr.png"/>
        </div>
      </div>
    );
  }
}

export default AboutContent;
