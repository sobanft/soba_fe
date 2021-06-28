import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../../css/mobile/SingIn.module.css';
import commonstyles from '../../css/mobile/Common.module.css';

class SingIn extends React.Component{
  constructor(props)
  {
      super(props);
      this.state = {
        id : '',
        password : '',
        isLogin : false,
      }  
  }
  handleClick = async (e) => {  
    const data = await axios.post("https://www.sobanft.com/api/signin", {
      id: this.state.id,
      password: this.state.password
    });
    if(data.data.isLogined){
        window.localStorage.setItem('isLogined', data.data.isLogined);
        window.localStorage.setItem('nickname', data.data.nickname);
        window.localStorage.setItem('email', data.data.email);
        window.localStorage.setItem('token', data.data.token);
        this.setState({ isLogin: true });

    }else{
      alert("E-Mail or password is wrong.")
    }
  }
  onKeyPress = (e) => {
    if(e.key === "Enter"){
      this.handleClick();
    }
  }
  idhandleChange = (e) => {
    this.setState({
      id: e.target.value
    })
  }
  passwordhandleChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  
  render(){
    if(window.sessionStorage.getItem('isLogined')){
      this.setState({ isLogin: true });
    }
    const { id, password, isLogin } = this.state;
    return (
      <div>
        { !isLogin ? 
        <div className={commonstyles.full_width_colume}>
          <div className={styles.singin_container}>
            <div className={styles.title_container}>
              <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_singin.png" />
            </div>
            <hr className={commonstyles.title_line} />
            <div className={styles.email_container}>
              <div className={styles.email_title}>
                <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_email.png" />
              </div>
              <div className={styles.input_container}>
                <input className={styles.email_input} placeholder="Enter the E-mail." onKeyPress={this.onKeyPress} onChange={this.idhandleChange} value={id}></input>
              </div>
            </div>
            <div className={styles.password_container}>
              <div className={styles.password_title}>
                <div className={styles.password_title_image}>
                  <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_password.png" />
                </div>
                <div>
                  <Link to="/recoverypassword">
                    <span className={styles.password_find_text}>Forgot Password?</span>
                  </Link>
                </div>
              </div>
              <div className={styles.input_container}>
                <input type="password" className={styles.password_input} onKeyPress={this.onKeyPress} onChange={this.passwordhandleChange} value={password} placeholder="Enter the Password."></input>
              </div>
            </div>
            <div className={styles.singin_bottom_container}>
              <div className={styles.singin_bottom_title} onClick={this.handleClick}>
                <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_btn_member_signin.png" />
              </div>
              <div className={styles.singin_bottom_text}>
                <span className={styles.singin_bottom_text_left}>Don't have an account?</span>
                <Link to="/signup">
                  <span className={styles.singin_bottom_text_right}>Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
         : this.props.history.push(`/`) }
      </div>
      
    );
  }
}

export default SingIn;
