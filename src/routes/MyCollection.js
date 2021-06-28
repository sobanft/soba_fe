import React from 'react';
import axios from 'axios';
import styles from '../css/MyCollection.module.css';
import commonstyles from '../css/Common.module.css';
import MyContent from '../components/MyContent';

class MyCollection extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      isLogin : true,
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
        this.setState({ isLogin : true });
    }else{
        this.setState({ isLogin : false });
    }
  }
  componentDidMount() {
    this.getLogincheck();
    this.getProductList();
  }
  render(){
    
    const { isLogin, productlists } = this.state;
    return (
      <div>
        { isLogin ? 
        <div className={commonstyles.full_width}>
            <div className={commonstyles.area_width}>
              <div className={styles.mycollection_container}>
                <div>
                  <img src="https://image.soribada.com/image/sobanft/images/web/img_w_title_mp_mycollection.png" />
                </div>
                <hr className={commonstyles.title_line} />
                <div className={styles.collection_container}>
                  { productlists.length ? 
                    <MyContent items={productlists} />
                    :<div className={styles.collection_noshow_container} > <span className={styles.collection_noshow}>Your collection is empty.<br /> Get your first SOBA Kit right now.</span>
                    </div>
                  }
                </div>
                <div className={styles.mycollection_bottom_container}>
                  <div className={styles.mycollection_bottom_title}>
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

export default MyCollection;
