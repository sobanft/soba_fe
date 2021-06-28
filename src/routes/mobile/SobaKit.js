import React from 'react';
import axios from 'axios';
import styles from '../../css/mobile/SobaKit.module.css';
import commonstyles from '../../css/mobile/Common.module.css';
import SobaContent from '../../components/mobile/SobaContent'
import SobaKitNavigation from '../../components/mobile/SobaKitNavigation'


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
        <div className={commonstyles.full_width_colume}>
          <div className={styles.item_container}>
              <div className={styles.title_container}>
                  <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_sobakit.png" />
              </div>
              {/* <SobaKitNavigation />   */}
              <SobaContent items={productlists} />
          </div>
      </div>
    );
  }
}

export default SobaKit;
