import React from 'react';
import axios from 'axios';
import './css/mobile/Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.scss";
import "swiper/components/a11y/a11y.scss";
import "swiper/components/controller/controller.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/effect-cube/effect-cube.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "swiper/components/lazy/lazy.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/thumbs/thumbs.scss";
import "swiper/components/zoom/zoom.scss";
import SwiperCore, { Virtual,Keyboard,Mousewheel,Navigation,Pagination,Scrollbar,Parallax,Zoom,Lazy,Controller,A11y,History,HashNavigation,Autoplay,EffectFade,EffectCube,EffectFlip,EffectCoverflow,Thumbs} from "swiper"

SwiperCore.use([Virtual,Keyboard,Mousewheel,Navigation,Pagination,Scrollbar,Parallax,Zoom,Lazy,Controller,A11y,History,HashNavigation,Autoplay,EffectFade,EffectCube,EffectFlip,EffectCoverflow,Thumbs])

class Home extends React.Component{
  state = {
    email : '',
    data : [],
    checkFlag : false,
    checkView : false,
  }  
  handleChange = (e) => {
    this.setState({
      email: e.target.value
    })
    // console.log(this.state.email);
  }

  handleCheckChange = (e) => {
    this.setState({
      checkFlag: e.target.checked
    })
    // console.log(this.state.checkFlag);
  }
  handlePopupClick = (e) => {
    this.setState({
      checkView: true
    })
    // console.log(this.state.checkFlag);
  }

  handlePopupCloseClick = (e) => {
    this.setState({
      checkView: false
    })
    // console.log(this.state.checkFlag);
  }

  
  

  handleClick = async () => {
    // console.log(this.state.email);
    // console.log(this.state.checkFlag);
    if(this.state.email === ""){
      alert("이메일 주소를 입력해 주세요.");
      return;
    }else{
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(this.state.email)) {
        alert("이메일 양식을 확인해 주세요!");
        return false;
      }
    }


    if(!this.state.checkFlag){
      alert("뉴스레터 수신 동의에 체크 후 등록 바랍니다.");
      return false;
    }
    const data = await axios.get("https://www.sobanft.com/api/emailInsert?email="+this.state.email);
    // console.log(data);
    if(data.data){
      alert("메일 등록이 완료되었습니다. 사이트 정식 오픈시 안내해 드리도록 하겠습니다.")
    }else{
      alert("이미 등록된 이메일 주소 입니다. 다른 이메일로 등록 부탁드립니다.")
    }

    window.location.href = '/';
  }
  
  render(){
    const { email, checkFlag } = this.state;
    return (
      <div>
        
        <section className="m-container">
          <Swiper
                spaceBetween={50}
                loop={true}
                autoplay={{delay : 5000}}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) =>{} }
                onSlideChange={() => {}}
              >
                <SwiperSlide>
                  <div className="m-visual01-container">
                    <img className="img-width-100" src="https://image.soribada.com/image/sobanft/comingsoon/mobile/img_m_visual01_bg.png" />
                    <div className="m-visual01-text">
                      <img className="img-width-100" src="https://image.soribada.com/image/sobanft/comingsoon/mobile/img_m_visual01_title.png" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="m-visual02-container">
                    <img className="img-width-100" src="https://image.soribada.com/image/sobanft/comingsoon/mobile/img_m_visual02_bg.png" />
                    <div className="m-visual02-text">
                      <img className="img-width-100" src="https://image.soribada.com/image/sobanft/comingsoon/mobile/img_m_visual02_title.png" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="m-visual03-container">
                    <img className="img-width-100" src="https://image.soribada.com/image/sobanft/comingsoon/mobile/img_m_visual03_bg.png" />
                    <div className="m-visual03-text">
                      <img className="img-width-100" src="https://image.soribada.com/image/sobanft/comingsoon/mobile/img_m_visual03_title.png" />
                    </div>
                  </div>
                </SwiperSlide>
                
              </Swiper>
          
        </section>
        <footer>
          <div className="m-footer-container">
            <img className="m-footer-title-img" src="https://image.soribada.com/image/sobanft/comingsoon/mobile/img_m_subscribe_event_title.png" />
            <div className="m-footer-detail-btn">
              <img className="m-footer-detail-img" onClick={this.handlePopupClick} src="https://image.soribada.com/image/sobanft/comingsoon/mobile/img_m_subscribe_event_btn.png" />
            </div>
            <div className="m-subscribe-container">
              <input className="m-subscribe-inputbox" id="inputemail" placeholder="Email address" onChange={this.handleChange} value={email}></input>
              <div className="m-subscribe-inputbox-btn-container">
                  <img className="m-subscribe-inputbox-btn"  onClick={this.handleClick} src="https://image.soribada.com/image/sobanft/comingsoon/mobile/img_m_subscribe_btn.png" />
              </div>
            </div>
            <div className="m-subscribe-check-container">
              <input className="m-subscribe-checkbox" type="checkbox" onChange={this.handleCheckChange} value={checkFlag}></input>
                <img className="m-subscribe-check-text" src="https://image.soribada.com/image/sobanft/comingsoon/mobile/img_m_subscribe_text.png" />
            </div>
            <div className="m-contact-container">
              <div><span className="m-contact-text">Copyright © Soba Platform. All Rights Reserved</span></div>
            </div>
            <div className="m-contact-container-end">
              <div><span className="m-contact-email-text">Contact : <span><a href="mailto:help@sobatoken.io">help@sobatoken.io</a></span></span></div>
            </div>
          </div>
        </footer>


        { this.state.checkView ? <div className="m-popup-container" onClick={this.handlePopupCloseClick}>
          <div className="m-popup-image-container">
            <img className="img-width-100" src="https://image.soribada.com/image/sobanft/comingsoon/mobile/img_m_event.png" />
          </div>
        </div> : null }


        
      </div>
    );
  }
}

export default Home;
