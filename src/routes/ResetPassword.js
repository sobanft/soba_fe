import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../css/RecoveryPassword.module.css';
import commonstyles from '../css/Common.module.css';
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
    const { search } = this.props.location;	// ????????? ???????????? ???????????? ????????????.
    const queryObj = queryString.parse(search);	// ???????????? ?????????????????? Object??? ??????
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
        <div className={commonstyles.full_width}>
            <div className={commonstyles.area_width}>
              <div className={styles.recovery_container}>
                <div>
                  <img src="https://image.soribada.com/image/sobanft/images/web/img_w_title_member_recoverpassword.png" />
                </div>
                <hr className={commonstyles.title_line} />
                <div className={styles.password_container}>
                  <div className={styles.password_title}>
                    <img className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/web/img_w_title_member_importance.png" />
                    <img src="https://image.soribada.com/image/sobanft/images/web/img_w_title_member_newpassword.png" />
                    <span className={styles.password_find_text}>Please enter a password of at least 8 character include numbers and special symbols</span>
                  </div>
                  <div className={styles.input_container}>
                    <input type="password" className={styles.password_input} onKeyPress={this.onKeyPress} onChange={this.handleChange} value={password} name="password" placeholder="Enter the password."></input>
                  </div>
                </div>
                <div className={styles.password_container}>
                  <div className={styles.password_title}>
                    <img className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/web/img_w_title_member_importance.png" />
                    <img src="https://image.soribada.com/image/sobanft/images/web/img_w_title_member_confirmpassword.png" />
                  </div>
                  <div className={styles.input_container}>
                    <input type="password" className={styles.password_input} onKeyPress={this.onKeyPress} onChange={this.handleChange} value={confirmpassword} name="confirmpassword" placeholder="Enter the password again."></input>
                  </div>
                </div>
                
                <div className={styles.recovery_bottom_container}>
                  <div className={styles.recovery_bottom_title}>
                    <img onClick={this.handleClick} src="https://image.soribada.com/image/sobanft/images/web/img_w_btn_member_recoverpassword.png" />
                  </div>
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
