import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../../css/mobile/SingUp.module.css';
import commonstyles from '../../css/mobile/Common.module.css';

class SingUp extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      email : '',
      password : '',
      confirmpassword : '',
      nickname : '',
      token : '',
      isLogin : false
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
    if(e.key == "Enter"){
      this.handleClick();
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
  handleClick = async () => {
    // console.log(this.state.email);
    // console.log(this.state.checkFlag);
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
    if(this.state.password === "" || this.state.confirmpassword === ""){
      alert("Enter the Password or Confirm Password"); 
      return;
    }
    if(this.state.nickname === ""){
      alert("Enter the Nickname"); 
      return;
    }

    if(this.state.password !== this.state.confirmpassword){
      alert("Password fields don't match."); 
      return;
    }
    
    var reg = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(reg.test(this.state.password) === false){
      alert("Please enter a password of at least 8 character include numbers and special symbols"); 
      return;
    }
    const data = await axios.post("https://www.sobanft.com/api/signup", {
      email: this.state.email,
      password: this.state.password,
      nickname: this.state.nickname
    });
    if(data.data == "OK"){
      alert("Thank you for sign up.")
      this.setState({
        ...this.state,
        isLogin: true
      });
    }else{
      alert("Email address already registered. Please register with another email")
    }
  }
  componentDidMount(){
    this.getLogincheck();
  }
  render(){
    const { isLogin, email, password, confirmpassword, nickname } = this.state;
    return (
      <div>
        { !isLogin ? 
        <div className={commonstyles.full_width_colume}>
          <div className={styles.singup_container}>
            <div className={styles.image_title}>
              <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_singup.png" />
            </div>
            <hr className={commonstyles.title_line} />
            <div className={styles.email_container}>
              <div className={styles.email_title}>
                <img className={ styles.dot_img } src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_email.png" />
              </div>
              <div className={styles.input_container}>
                <input className={styles.email_input} onKeyPress={this.onKeyPress} onChange={this.handleChange} value={email} name="email" placeholder="Enter the E-Mail."></input>
              </div>
            </div>
            <div className={styles.password_container}>
              <div className={styles.password_title}>
                <img className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                <img className={styles.password_title_image} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_password.png" />
                <span className={styles.password_find_text}>Please enter a password of at least 8 character include numbers and special symbols</span>
              </div>
              <div className={styles.input_container}>
                <input type="password" className={styles.password_input} onKeyPress={this.onKeyPress} onChange={this.handleChange} value={password} name="password" placeholder="Enter the password."></input>
              </div>
            </div>
            <div className={styles.password_container}>
              <div className={styles.password_title}>
                <img className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                <img className={styles.password_title_confirm_image} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_confirmpassword.png" />
              </div>
              <div className={styles.input_container}>
                <input type="password" className={styles.password_input} onKeyPress={this.onKeyPress} onChange={this.handleChange} value={confirmpassword} name="confirmpassword" placeholder="Enter the password again."></input>
              </div>
            </div>
            <div className={styles.nickname_container}>
              <div className={styles.nickname_title}>
                <img className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_nickname.png" />
              </div>
              <div className={styles.input_container}>
                <input type="text" className={styles.nickname_input} onKeyPress={this.onKeyPress} onChange={this.handleChange} value={nickname} name="nickname" placeholder="Enter a Nickname for your profile."></input>
              </div>
            </div>
            <div className={styles.singup_bottom_container}>
              <div className={styles.singup_bottom_title}>
                <img className={commonstyles.image_width} onClick={this.handleClick} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_btn_member_signup.png" />
              </div>
            </div>
          </div>
        </div>
      : this.props.history.push(`/`) }
      </div>
      
      
      
    );
  }
}

export default SingUp;
