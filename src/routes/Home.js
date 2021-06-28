import React from 'react';
import axios from 'axios';
import commonstyles from '../css/Common.module.css';
import TopBanner from '../components/TopBanner'
import SobaContent from '../components/SobaContent'
import SobaBottom from '../components/SobaBottom'
import SobaNewsLetter from '../components/SobaNewsLetter'


class Home extends React.Component{
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
    if(data){
      this.setState({...this.state, productlists : data, isLoading : false });
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
        <div className={commonstyles.area_width}>
          <TopBanner />
          <SobaContent items={productlists} />
          <SobaBottom />
          { /* <SobaNewsLetter /> */}
        </div>
      </div>
      
    );
  }
}

export default Home;
