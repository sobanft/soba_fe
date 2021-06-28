import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../../css/mobile/RecoveryPassword.module.css';
import commonstyles from '../../css/mobile/Common.module.css';
import queryString from 'query-string';

class ResetPassword extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
        isLogin : false,
        password : '',
        confirmpassword : '',
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
    console.log("token :" + this.state.token)
    if(this.state.password === "" || this.state.confirmpassword === ""){
      alert("Enter the Password or Confirm Password"); 
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

    const data = await axios.post("https://www.sobanft.com/api/account/password_reset/confirm", {
      password: this.state.password,
      token: this.state.token,
    });
    if(data.data.status === "OK"){
    // if(1){
      alert("Your password reset confirm.")
      window.location.href = "/";
    }else{
      alert("Your password reset reject. please check password")
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
    console.log(this.props.location);
    const { search } = this.props.location;	// 문자열 형식으로 결과값이 반환된다.
    const queryObj = queryString.parse(search);	// 문자열의 쿼리스트링을 Object로 변환
    const { token } = queryObj;
    console.log(token)
    this.setState({
      ...this.state,
      token: token
    });
  }
  render(){
    const { isLogin, password, confirmpassword } = this.state;
    return (
      <div>
      { !isLogin ? 
        <div className={commonstyles.full_width_colume}>
          <div className={styles.recovery_container}>
            <div className={styles.recovery_title_image}>
              <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_recoverpassword.png" />
            </div>
            <hr className={commonstyles.title_line} />
            <div className={styles.password_container}>
              <div className={styles.password_title}>
                <img className={commonstyles.image_width} className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                <img className={styles.password_title_image} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_newpassword.png" />
                <span className={styles.password_find_text}>Please enter a password of at least 8 character include numbers and special symbols</span>
              </div>
              <div className={styles.input_container}>
                <input type="password" className={styles.password_input} onKeyPress={this.onKeyPress} onChange={this.handleChange} value={password} name="password" placeholder="Enter the password."></input>
              </div>
            </div>
            <div className={styles.password_container}>
              <div className={styles.password_title}>
                <img className={commonstyles.image_width} className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                <img className={styles.password_title_confirm_image} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_confirmpassword.png" />
              </div>
              <div className={styles.input_container}>
                <input type="password" className={styles.password_input} onKeyPress={this.onKeyPress} onChange={this.handleChange} value={confirmpassword} name="confirmpassword" placeholder="Enter the password again."></input>
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

export default ResetPassword;
