import React from 'react';
import axios from 'axios';
import styles from '../../css/mobile/Profile.module.css';
import commonstyles from '../../css/mobile/Common.module.css';

class Profile extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
        isLogin : true,
        email : "",
        nickname : "",
        password : "",
        newpassword : "",
        confirmpassword : ""
    }  
  }
  getLogincheck = async () => {
    if(window.localStorage.getItem('isLogined')){
      this.setState({
        ...this.state,
        isLogin : true,
        email : window.localStorage.getItem('email'),
        nickname : window.localStorage.getItem('nickname'),
        token : window.localStorage.getItem('token')
      });
    }else{
      this.setState({
        ...this.state,
        isLogin : false
      });
    }
  }
  handleClick = async () => {
    // console.log(this.state.email);
    // console.log(this.state.checkFlag);
    
    if(this.state.password === "" || this.state.confirmpassword === "" || this.state.newpassword === ""){
      alert("Enter the Password."); 
      return;
    }
    
    var reg = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(reg.test(this.state.newpassword) === false){
      alert("Please enter a password of at least 8 character include numbers and special symbols."); 
      return;
    }
    
    if(this.state.newpassword !== this.state.confirmpassword){
      alert("Password fields don't match."); 
      return;
    }

    const data = await axios.post("https://www.sobanft.com/api/passwordchange", {
      password: this.state.password,
      newpassword: this.state.newpassword,
      confirmpassword: this.state.confirmpassword,
      token : this.state.token
    });
    if(data.data === "TRUE"){
      alert("Success Change Password.")
    }else{
      alert("Try Change Password.")
    }
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value.replace(/^\s+|\s+$/gm,'')
    });
  }
  componentDidMount() {
    this.getLogincheck();
  }
  render(){
    const { isLogin,email , nickname, password, newpassword, confirmpassword } = this.state;
    return (
      <div>
        { isLogin ? 
        <div className={commonstyles.full_width_colume}>
            <div className={styles.profile_container}>
              <div className={styles.profile_image_title}>
                <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_mp_myprofile.png" />
              </div>
              <hr className={commonstyles.title_line} />
              <div className={styles.email_container}>
                <div className={styles.email_title}>
                  <img className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                  <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_email.png" />
                </div>
                <div className={styles.input_container}>
                  <input disabled={true} className={styles.email_input} value={email} ></input>
                </div>
              </div>
              <div className={styles.password_container}>
                <div className={styles.password_title}>
                  <img className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                  <img className={styles.password_title_image} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_password.png" />
                </div>
                <div className={styles.input_container}>
                  <input type="password" className={styles.password_input} onChange={this.handleChange} value={password} name="password" placeholder="Enter the password."></input>
                </div>
              </div>
              <div className={styles.password_container}>
                <div className={styles.password_title}>
                  <img className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                  <img className={styles.password_title_new_image} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_newpassword.png" />
                </div>
                <div className={styles.input_container}>
                  <input type="password" className={styles.password_input} onChange={this.handleChange} value={newpassword} name="newpassword" placeholder="Enter the new password."></input>
                </div>
              </div>
              <div className={styles.password_container}>
                <div className={styles.password_title}>
                  <img className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                  <img className={styles.password_title_confirm_image} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_confirmpassword.png" />
                </div>
                <div className={styles.input_container}>
                  <input type="password" className={styles.password_input} onChange={this.handleChange} value={confirmpassword} name="confirmpassword" placeholder="Enter the new password again."></input>
                </div>
              </div>
              <div className={styles.nickname_container}>
                <div className={styles.nickname_title}>
                  <img className={styles.dot_img} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_importance.png" />
                  <img className={styles.nickname_title_image} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_member_nickname.png" />
                </div>
                <div className={styles.input_container}>
                  <input type="text" disabled={true} className={styles.nickname_input}  value={nickname}></input>
                </div>
              </div>
              <div className={styles.profile_bottom_container}>
                <div className={styles.profile_bottom_title}>
                  <img className={commonstyles.image_width}  onClick={this.handleClick}  src="https://image.soribada.com/image/sobanft/images/mobile/img_m_btn_myprofile_save.png" />
                </div>
              </div>
            </div>
        </div>
      : this.props.history.push(`/signin`) }
      </div>
      
      
      
    );
  }
}

export default Profile;
