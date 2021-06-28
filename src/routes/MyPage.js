import React from 'react';
import axios from 'axios';
import styles from '../css/MyPage.module.css';
import commonstyles from '../css/Common.module.css';
import MyContent from '../components/MyContent';
import { Link } from 'react-router-dom';

class MyPage extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
        isLogin : true,
        nickname : "",
        productlists : []
    }  
  }
  getProductList = async () => {
    const {
      data : { 
        data
      },
    } = await axios.post("https://www.sobanft.com/api/klip/orders", {
      token: window.localStorage.getItem('token')
    });
    this.setState({ 
      ...this.state,
      productlists : data });
    // console.log(this.state.productlists)
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
  
  componentDidMount(){
    this.getLogincheck();
    this.getProductList();
  }
  
  render(){
    const { isLogin, productlists,nickname } = this.state;
    // console.log(productlists.length);
    return (
      <div>
        { isLogin ? 
        <div className={commonstyles.full_width}>
          <div className={commonstyles.area_width}>
            <div className={styles.item_container}>
                <div className={styles.title_container}>
                  <div className={styles.nickname_container}>
                    <p className={styles.nickname_text}>{nickname}'s MyPage</p>
                  </div>
                  <Link to={`/mypage/profile/`} className={styles.edit_container}>
                    <img src="https://image.soribada.com/image/sobanft/images/web/img_w_btn_editprofile.png" />
                  </Link>
                </div>
                <div className={styles.content_container}>
                  <div className={styles.mycollection_container}>
                    <div className={styles.mycollection_title_container}>
                      
                      <div className={styles.mycollection_title}>
                        <img src="https://image.soribada.com/image/sobanft/images/web/img_w_title_mp_mycollection.png" />
                      </div>

                      <Link to={`/mypage/mycollection/`} className={styles.mycollection_more}>
                        <img src="https://image.soribada.com/image/sobanft/images/web/img_w_btn_more.png" />
                      </Link>
                    </div>
                    <div className={styles.mycollection_content_container}>
                      { productlists.length ? 
                      <MyContent items={productlists} />
                      :<div className={styles.mycollection_noshow_container} > <span className={styles.mycollection_noshow}>Your collection is empty.<br /> Get your first SOBA Kit right now.</span>
                      </div>
                      }
                    </div>
                  </div>
                </div>
                <div className={styles.content_container}>
                  <div className={styles.mywallet_container}>
                    <div className={styles.mywallet_title_container}>
                      <div className={styles.mywallet_title}>
                        <img src="https://image.soribada.com/image/sobanft/images/web/img_w_title_mp_mywallet.png" />
                      </div>
                      <Link to={`/mypage/mywallet/`}  className={styles.mywallet_more}>
                        <img src="https://image.soribada.com/image/sobanft/images/web/img_w_btn_more.png" />
                      </Link>
                    </div>
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

export default MyPage;
