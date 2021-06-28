import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../../css/mobile/RecoveryPassword.module.css';
import commonstyles from '../../css/mobile/Common.module.css';

class RecoveryPassword extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
        isLogin : false,
        email : "",
        productlists : []
    }  
  }
  getLogincheck = async () => {
    if(window.localStorage.getItem('isLogined')){
        this.setState({
          ...this.state,
          isLogin : true,
          token : window.localStorage.getItem('token'),
          nickname : window.localStorage.getItem('nickname')
         });
    }else{
        this.setState({ 
          ...this.state,
          isLogin : false });
    }
  }
  handleClick = async (e) => {  
    if(this.state.email === ""){
      alert("Enter the E-mail"); 
      return;
    }else{
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(this.state.email)) {
        alert("Please check the email form.");
        return false;
      }
    }
    const data = await axios.post("https://www.sobanft.com/api/account/password_reset/", {
      email: this.state.email,
    });
    console.log(data);
    if(data.data.status === "OK"){
    // if(1){
        window.location.href = "/recoverypassword/done";
    }else{
      alert("E-Mail is wrong.")
    }
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value.replace(/^\s+|\s+$/gm,'')
    });
  }
  onKeyPress = (e) => {
    if(e.key === "Enter"){
      this.handleClick();
    }
  }
  componentDidMount() {
    this.getLogincheck();
  }
  render(){
    const { isLogin, email } = this.state;
    return (
      <div>
      { !isLogin ? 
        <div className={commonstyles.full_width_colume}>
          <div className={styles.recovery_container}>
            <div className={styles.recovery_title_image}>
              <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_recoverpassword.png" />
            </div>
            <hr className={commonstyles.title_line} />
            <div className={styles.email_container}>
              <div className={styles.email_title}>
                <img className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                <img className={styles.email_title_image} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_email.png" />
              </div>
              <div className={styles.input_container}>
                <input className={styles.email_input} onKeyPress={this.onKeyPress} onChange={this.handleChange} value={email} name="email" placeholder="Enter the E-Mail."></input>
              </div>
            </div>
            
            <div className={styles.recovery_bottom_container}>
              <div className={styles.recovery_bottom_title}>
                <img className={commonstyles.image_width} onClick={this.handleClick} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_btn_member_recoverpassword.png" />
              </div>
            </div>
          </div>
        </div>
      : this.props.history.push(`/`) }
      </div>
      
      
      
    );
  }
}

export default RecoveryPassword;
