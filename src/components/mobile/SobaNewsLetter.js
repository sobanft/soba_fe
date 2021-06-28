import React from 'react';
import styles from '../../css/mobile//SobaNewsLetter.module.css';
import commonstyles from '../../css/mobile//Common.module.css';

class SobaNewsLetter extends React.Component{
  render(){
    return (
      <div className={commonstyles.full_width}>
            <div className={commonstyles.area_width}>
              <div className={styles.newsletter_container}>
                <img className={styles.newsletter_title} src="https://image.soribada.com/image/sobanft/images/web/img_w_subscribe_title.png" />
                <div className={styles.news_input_container}>
                    <input className={styles.news_input} placeholder="Email adress"></input>
                    <div className={styles.news_button}><img src="https://image.soribada.com/image/sobanft/images/web/img_w_subscribe_btn.png" /></div>
                </div>
                <div className={styles.news_checkbox_container}>
                    <input type="checkbox" className={styles.news_checkbox} ></input>
                    <div><img  className={styles.news_checkbox_img} src="https://image.soribada.com/image/sobanft/images/web/img_w_subscribe_text.png" /></div>
                </div>
              </div>
            </div>
      </div>
    );
  }
}

export default SobaNewsLetter;
