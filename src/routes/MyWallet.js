import React from 'react';
import axios from 'axios';
import styles from '../css/MyWallet.module.css';
import commonstyles from '../css/Common.module.css';
import { ethers } from 'ethers';


class MyWallet extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
        isLogin : true,
    }  
  }
  handleClick = async (e) => {  
    
    var ethereum = window.ethereum;
    if (ethereum && ethereum.isMetaMask) {
      console.log(ethereum)
      // var provider = getWeb3.providers.Web3Provider(ethereum);
      // console.log(provider);

      var accountList = await ethereum.request({ method: 'eth_accounts' });
      if(accountList.length == 0){
        var requestAccounts = await ethereum.request({ method: 'eth_requestAccounts' });
      }
      accountList = await ethereum.request({ method: 'eth_accounts' });
      console.log(accountList);
      var address = accountList[0];
      var transactionHash = await ethereum.request({
          method: 'personal_sign',
          params: [
            address, "SOBANFT uses this cryptographic signature in place of a password, verifying that you are the owner of this Ethereum address."
          ]
      });
      console.log("transactionHash : " + transactionHash)
      const data = await axios.post("https://www.sobanft.com/api/account/update", {
        mb_coin_address: address,
        mb_wallet_hash : transactionHash,
        token : window.localStorage.getItem('token')
      });
      console.log(data);
      if(data.data.status === "OK"){
        alert("Metamask Connect Success!")
      }
      
    }else{
      var userAgent = window.navigator.userAgent;
				var isChrome = userAgent.indexOf('Chrome');
				if (isChrome > -1) {
					alert("Metamask is not installed.");
					window.location.href = "https://metamask.io/";
				} else {
					alert("Recommended for use in Chrome.");
					window.location.href = "https://www.google.com/chrome/";
				}
    }
  }
  getLogincheck = async () => {
    if(window.localStorage.getItem('isLogined')){
        this.setState({ isLogin : true });
    }else{
        this.setState({ isLogin : false });
    }
  }
  componentDidMount() {
    this.getLogincheck();
  }
  render(){
    const { isLogin } = this.state;
    return (
      <div>
        { isLogin ? 
        <div className={commonstyles.full_width}>
            <div className={commonstyles.area_width}>
              <div className={styles.recovery_container}>
                <div>
                  <img src="https://image.soribada.com/image/sobanft/images/web/img_w_title_mp_mywallet.png" />
                </div>
                <hr className={commonstyles.title_line} />
                <div className={styles.email_container}>
                    <p className={styles.back_text}>Use after connecting your wallet.<br/><br/> If the wallet cannot be connected,<br/> Please refresh the page or reconnect to the site.</p>
                </div>
                <div className={styles.recovery_bottom_container}>
                  <div className={styles.recovery_bottom_title} onClick={this.handleClick}>
                    <img src="https://image.soribada.com/image/sobanft/images/web/img_w_btn_connectwallet.png" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      : this.props.history.push(`/signin`) }
      </div>
      
      
      
    );
  }
}

export default MyWallet;
