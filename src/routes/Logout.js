import React from 'react';
import axios from 'axios';

class Logout extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
        isLogin : true,
    }
  }
  logoutCall = async (e) => {
    const data = await axios.post("https://www.sobanft.com/api/logout", {
    });
    console.log(data);
    window.localStorage.removeItem('isLogined');
    window.localStorage.removeItem('nickname');
    window.localStorage.removeItem('email');
    this.setState({ isLogin : false });
    // if(data.data.isLogined){
    //     window.localStorage.setItem('isLogined', "");
    //     window.localStorage.setItem('nickname', "");
    //     window.localStorage.setItem('email', "");
    //     this.setState({ isLogin : false });
    // }
  }

  componentDidMount(){
    this.logoutCall();
  }  
  

  render(){
    const { isLogin } = this.state;
    return (
      <div>
        {isLogin ? "" : this.props.history.push(`/`)}
      </div>
    )
  }
}

export default Logout;
