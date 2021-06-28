import React from 'react';
import axios from 'axios';
import styles from '../css/SobaKitItemDetail.module.css';
import commonstyles from '../css/Common.module.css';
import { ethers } from 'ethers';
import ReactPlayer from "react-player";


class SobaKitItemDetail extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
        isLogin : true,
        hash : "",
        trix : 0,
        isLoading : false,
        product : []
    }  
  }
  handleClick = async (e) => {  
    var ethereum = window.ethereum;
    if (ethereum && ethereum.isMetaMask) {

      if(this.state.isLogin){
        const datacheck = await axios.post("https://www.sobanft.com/api/klip/order_available", {
          pd_idx: this.state.product.pd_idx,
        });
        // console.log(datacheck)

        if(datacheck.data.remains > 0){
          var reduplication = false;
          var trix = this.state.trix;
          var txidHash;


          if (reduplication) {
            alert("Work is already in progress.");
            return false;
          } else {
            this.setState({ 
              ...this.state,
              isLoading : true
            });
            reduplication = true;
            var ethereum = window.ethereum;
            var provider = new ethers.providers.Web3Provider(ethereum);
      
            if (ethereum && ethereum.isMetaMask) {
      
              var accountList = await ethereum.request({ method: 'eth_accounts' });
              
              if(accountList.length === 0){
                var requestAccounts = await ethereum.request({ method: 'eth_requestAccounts' });
              }
              accountList = await ethereum.request({ method: 'eth_accounts' });

              // console.log(accountList);
      
              var address = accountList[0];
              // console.log(address);
      
              // if (mb_address == address && mb_address != '' && address != '') {
              if (true) {
                var signer = provider.getSigner();
                
      
                var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"BurnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"BurnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"HiddenOwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"InvestorLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"InvestorUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Locked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"LockerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"LockerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"TimeLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"TimeUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Unlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addBurner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"months","type":"uint256"}],"name":"addInvestorLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addLocker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"expiresAt","type":"uint256"}],"name":"addTimeLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getInvestorLock","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getInvestorLockedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint8","name":"index","type":"uint8"}],"name":"getTimeLock","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getTimeLockLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getTimeLockedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hiddenOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isBurner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isLocker","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeBurner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeInvestorLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeLocker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint8","name":"index","type":"uint8"}],"name":"removeTimeLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newHiddenOwner","type":"address"}],"name":"transferHiddenOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]
                
                /* Contract address for Mainnet TRIX Token */
                var contractAddress = "0x65032604dab202aff9adf89300cdb4bd0d059f55"; 
      
                /* Contract address for Testnet(Ropsten) TRIX Token */
                // var contractAddress = "<?php echo $GLOBALS["_cfg"]["coin"]["contract_web"]?>";
                
                var contract = new ethers.Contract(contractAddress, abi, signer);
                // console.log(contract)
                var balance = await contract.balanceOf(address);
                // console.log(balance);
                var balanceInt = balance / 1e18;
      
                if(trix > balanceInt){
                // if(false){
                  alert("Your SobaCoin balance is insufficient.");
                  this.setState({ 
                    ...this.state,
                    isLoading : false
                  });
                  reduplication = false;
                }	else {
                  // var getAddress = '0x1d72ba029a3ae3e35a0684bb72df31fe8e1aad98';
                  var getAddress = '0x816Da8246cbf5761556c90cB9d1d49195F523824';
                  
                  var trixToSend = ethers.utils.parseUnits(trix+'', 18);
                  var sendTransactionPromise = contract.transfer(getAddress, trixToSend);
                  sendTransactionPromise.then((tx) => {
                    // console.log(tx);
                    reduplication = false;
      
                    var receipt = tx.wait();
                    receipt.then((result) => {
                      // console.log(result);
                      var txid = result.transactionHash;
                      // console.log(txid);
                      //TODO : 전송 결과를 받는 부분입니다. txid 가 토큰을 전송한 transaction 의 ID 입니다. transaction이 전송될때까지 로딩화면 등 필요..
                      if (txid) {
                        txidHash = txid;
                        this.setState({ 
                          ...this.state,
                          hash : txidHash,
                          isLoading : false
                        
                        });
                          this.orderComfirm();
                      }
      
                    });
                  }, (error) => {
                    // console.log(error);
                    alert("Metamask communication error.");
                    this.setState({ 
                      ...this.state,
                      isLoading : false
                    });
                    reduplication = false;
                  });
                  
                }
      
              } else {
                alert("This is not the accounts wallet information.");
                this.setState({ 
                  ...this.state,
                  isLoading : false
                });
                reduplication = false;
              }
            } 
      
          }

        }else{
          alert("Sorry, This Content Sold Out!")  
        }


          // if(datacheck.data.remains > 0){
          //   const data = await axios.post("https://www.sobanft.com/api/klip/order", {
          //     pd_idx: this.state.product.pd_idx,
          //     hash: "testhash",
          //     trix : 500,
          //     token: window.localStorage.getItem('token')
          //   });
          //   console.log(data)
          //   if(data === "TRUE"){
              
          //   }else{
          //     alert("Sorry, This Content Sold Out!")  
          //   }


          // }else{
          //   alert("Sorry, This Content Sold Out!")
          // }
      }else{
        alert("Please Login!")
        window.location.href = "/signin"
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
  orderComfirm = async() => {
    // console.log(this.state.hash);
    const data = await axios.post("https://www.sobanft.com/api/klip/order", {
      pd_idx: this.state.product.pd_idx,
      hash: this.state.hash,
      trix : this.state.trix,
      token: window.localStorage.getItem('token')
    });
    // console.log(data);
    if(data.data.status === "OK"){
      alert("Success Buy Item!");
    }else{
      alert("Fail Buy Item!");
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
  getProductList = async () => {
    const product_id = this.props.match.params.id;
    // console.log(product_id)
    const {
      data : { 
        data
      },
    } = await axios.post("https://www.sobanft.com/api/product/"+product_id, {
    });
    // console.log(data)
    if(data){
      this.setState({ ...this.state, product : data[0], trix : data[0].pd_price , isLoading : false });
    }
  }
  
  componentDidMount(){
    this.getLogincheck();
    this.getProductList();
  }
  render(){
    const { product, isLoading } = this.state;
    const numberWithCommas = (num) => {
      return String(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    // console.log(product)
    return (
      <div className={commonstyles.full_width}>
        { isLoading ? <div className={styles.black_block}>
          <div  className={styles.black_block_container}>
            <span className={styles.black_block_message}>It may take some time to complete the transaction.<br/>If the transaction is not completed normally, please contact us.</span>
          </div>
        </div> : '' }
        
        <div className={commonstyles.area_width}>
          <div className={styles.itemdetail_container}>
            <div className={styles.itemdetail_top_container}>
              <div className={styles.itemdetail_img_box}>
                <img className={styles.itemdetail_img} src={product.pd_img_url} />
              </div>
              <div className={styles.itemdetail_top_title_container}>
                <div className={styles.itemdetail_volume_box}>
                  <p className={styles.itemdetail_volume}>New</p>
                </div>
                <div className={styles.itemdetail_title_box}>
                  <p className={styles.itemdetail_title}>{product.pd_name}</p>
                </div>
                <div className={styles.itemdetail_count_box}>
                  <p className={styles.itemdetail_count_left}>Edition</p>
                  <p className={styles.itemdetail_count_right}>{product.od_count} of {product.pd_img_cnt}</p>
                </div>
                <div className={styles.itemdetail_price_box}>
                  <p className={styles.itemdetail_price_left}>Price</p>
                  <p className={styles.itemdetail_price_right}>{numberWithCommas(product.pd_price)} SOBA</p>
                </div>
                <div className={styles.itemdetail_buy_box}>
                  {/* <div className={styles.itemdetail_buy_left}>
                    <div className={styles.itemdetail_buy_minus}>
                      <img src="https://image.soribada.com/image/sobanft/images/web/img_w_btn_count_minus.png" />
                    </div>
                    <div className={styles.itemdetail_buy_count_container}>
                      <div>
                        <p>구매수량(개)</p>
                      </div>
                      <div>
                        <input></input>
                      </div>
                    </div>
                    <div className={styles.itemdetail_buy_plus}>
                      <img src="https://image.soribada.com/image/sobanft/images/web/img_w_btn_count_plus.png" />
                    </div>

                  </div> */}
                  <ReactPlayer
                    url={process.env.PUBLIC_URL+"/mp3/"+product.pd_idx+".mp3"}
                    width="400px"
                    height="60px"
                    playing={false}
                    controls={true}
                  />
                  <img  onClick={this.handleClick} className={styles.itemdetail_buy} src="https://image.soribada.com/image/sobanft/images/web/img_w_btn_collectnow.png" />
                </div>
              </div>
            </div>
            

            <div className={styles.itemdetail_top_next_container}>
            </div>
            
            <div className={styles.itemdetail_description_container}>
              <img src="https://image.soribada.com/image/sobanft/images/web/img_w_dummy_detail02.png" />
            </div>
            <div className={styles.itemdetail_description_container}>
              <img src="https://image.soribada.com/image/sobanft/images/web/img_w_dummy_detail03.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SobaKitItemDetail;
