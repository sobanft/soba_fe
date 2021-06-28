import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Navigation.module.css'
import commonstyles from '../css/Common.module.css';
import MyPageHover from '../components/MyPageHover';



class Navigation extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            isLogin : true,
            isHovering: false,
        }  
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }
    
    getLogincheck = async () => {
        if(window.localStorage.getItem('isLogined')){
            this.setState({ isLogin : true });
        }else{
            this.setState({ isLogin : false });
        }
      }
    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }
    mypageClick = (e) => {
        this.setState({
          ...this.state,
          isHovering: false
        });
      }
    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
    componentDidUpdate(){
        window.scrollTo(0, 0);
    }
    
    render(){
        const navion = this.props.location.pathname;
        let isLogin_render = "";
        let naviNum = 0;
        if(navion.indexOf("sobakit") === 1){
            naviNum = 1;
        }else if(navion.indexOf("about") === 1){
            naviNum = 2;
        }else if(navion.indexOf("mypage") === 1){
            naviNum = 3;
        }else if(navion.indexOf("sign") === 1){
            naviNum = 4;
        }
        if(window.localStorage.getItem('isLogined')){
            isLogin_render = true;
        }else{
            isLogin_render = false;
        }
        return (
            <div className={commonstyles.full_width}>
                <div className={`${styles.background_color} ${commonstyles.area_width}`}>
                    <div className={styles.top_container}>
                        <div className={styles.div_logo}>
                            <Link to="/" className={styles.logo_link}><img src="https://image.soribada.com/image/sobanft/images/web/img_w_top_logo_beta.png" /></Link>
                        </div>
                        <div className={styles.nav}>
                            <Link to="/sobakit" className={styles.nav_menu0}><img src={ (naviNum === 1) ? "https://image.soribada.com/image/sobanft/images/web/img_w_top_nav01_on.png" : "https://image.soribada.com/image/sobanft/images/web/img_w_top_nav01_off.png" }   /></Link>
                            <Link to="/about" className={styles.nav_menu1}><img src={ (naviNum === 2) ? "https://image.soribada.com/image/sobanft/images/web/img_w_top_nav02_on.png" : "https://image.soribada.com/image/sobanft/images/web/img_w_top_nav02_off.png" }   /></Link>
                            { isLogin_render ? 
                            <Link to="/mypage" className={styles.nav_menu2}
                            onClick={this.mypageClick}
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}
                            ><img src={ (naviNum === 3)? "https://image.soribada.com/image/sobanft/images/web/img_w_top_nav04_on.png" : "https://image.soribada.com/image/sobanft/images/web/img_w_top_nav04_off.png" }/>
                            {this.state.isHovering ?
                                <MyPageHover onMouseLeave={this.handleMouseHover}  /> : ``}    
                            </Link>
                             :
                            <Link to="/signin" className={styles.nav_menu2}><img src={ (naviNum === 4)? "https://image.soribada.com/image/sobanft/images/web/img_w_top_nav03_on.png" : "https://image.soribada.com/image/sobanft/images/web/img_w_top_nav03_off.png" }   /></Link> 
                             }
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;