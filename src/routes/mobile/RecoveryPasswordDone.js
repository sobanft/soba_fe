import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/mobile/RecoveryPasswordDone.module.css';
import commonstyles from '../../css/mobile/Common.module.css';

class RecoveryPasswordDone extends React.Component{
  state = {
    email : '',
    data : [],
    checkFlag : false,
    checkView : false,
  }  
  render(){
    return (
      <div className={commonstyles.full_width_colume}>
        <div className={styles.recovery_container}>
          <div className={styles.recovery_title}>
            <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_recoverpassword.png" />
          </div>
          <hr className={commonstyles.title_line} />
          <div className={styles.email_container}>
              <p className={styles.back_text}>I sent a temporary password to your Email.<br />Please check your E-mail.</p>
          </div>
          <div className={styles.recovery_bottom_container}>
            <Link to={`/signin`} className={styles.recovery_bottom_title}>
              <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_btn_member_backtosignin.png" />
            </Link>
          </div>
        </div>
      </div>
      
      
      
    );
  }
}

export default RecoveryPasswordDone;
