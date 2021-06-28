import React from 'react';
import axios from 'axios';
import styles from '../css/SobaKit.module.css';
import commonstyles from '../css/Common.module.css';
import SobaContent from '../components/SobaContent'
import SobaKitNavigation from '../components/SobaKitNavigation'


class SobaKit extends React.Component{
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
    } = await axios.post("https://www.sobanft.com/api/productlist", {
      page: 1,
      count: 6
    });
    // console.log(data);
    if(data){
      this.setState({ ...this.state,productlists : data, isLoading : false });
    }
    // console.log(this.state.productlists)
  }
  
  componentDidMount(){
    this.getProductList();
  }
  render(){
    const { productlists  } = this.state;
    return (
        <div className={commonstyles.full_width}>
        <div className={commonstyles.area_width}>
            <div className={styles.item_container}>
                <div className={styles.title_container}>
                    <img src="https://image.soribada.com/image/sobanft/images/web/img_w_title_sobakit.png" />
                </div>
                {/* <SobaKitNavigation />   */}
                <SobaContent items={productlists} />
            </div>
        </div>
      </div>
    );
  }
}

export default SobaKit;
