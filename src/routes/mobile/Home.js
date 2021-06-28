import React from 'react';
import axios from 'axios';
import commonstyles from '../../css/mobile/Common.module.css';
import TopBanner from '../../components/mobile/TopBanner'
import SobaContent from '../../components/mobile/SobaContent'
import SobaBottom from '../../components/mobile/SobaBottom'
import SobaNewsLetter from '../../components/mobile/SobaNewsLetter'


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
        <TopBanner />
        <SobaContent items={productlists} />
        <SobaBottom />
        { /* <SobaNewsLetter /> */}
      </div>
      
    );
  }
}

export default Home;
