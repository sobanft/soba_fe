import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/mobile/Navigation.module.css'
import commonstyles from '../../css/mobile/Common.module.css';
import MyPageHover from '../../components/mobile/MyPageHover';


class Navigation extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            isLogin : true,
            isViewMenu : false
        }  
    }
    
    getLogincheck = async () => {
        if(window.localStorage.getItem('isLogined')){
            this.setState({ isLogin : true });
        }else{
            this.setState({ isLogin : false });
        }
      }
    breadMenuToggleClick = (e) => {
        this.setState({
            ...this.state,
            isViewMenu: !this.state.isViewMenu
        });
    }
    componentDidUpdate(){
        window.scrollTo(0, 0);
    }
    
    render(){
        const navion = this.props.location.pathname;
        let isLogin_render = "";
        const { isViewMenu } = this.state;
        let naviNum = 0;
        if(navion.indexOf("sobakit") === 1){
            naviNum = 1;
        }else if(navion.indexOf("about") === 1){
            naviNum = 2;
        }else if(navion.indexOf("mypage") === 1){
            naviNum = 4;
        }else if(navion.indexOf("signin") === 1){
            naviNum = 3;
        }
        if(window.localStorage.getItem('isLogined')){
            isLogin_render = true;
        }else{
            isLogin_render = false;
        }
        console.log(isViewMenu);

        return (
            <div className={`${commonstyles.full_width}`}>
                <div className={`${styles.background_color} ${styles.top_container}`}>
                    <div className={styles.div_logo}>
                        <Link to="/" className={styles.logo_link}><img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_top_logo_beta.png" /></Link>
                    </div>
                    <div className={styles.div_menubread} onClick={this.breadMenuToggleClick} value="bread">
                        <div className={styles.logo_link}><img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav.png" /></div>
                    </div>
                </div>
                <div className={ styles.menu_block_container }>
                    { !isViewMenu ? "" : 
                    <div className={styles.menu_block} onClick={this.breadMenuToggleClick} value="bread">
                    </div>
                    }
                    <div className={ (isViewMenu) ? styles.nav_on : styles.nav_off}>
                        <Link to="/" onClick={this.breadMenuToggleClick} className={styles.nav_menu0}><img className={commonstyles.image_width} src={ (naviNum === 0) ? "https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav01_on.png" : "https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav01_off.png" }   /></Link>
                        <Link to="/sobakit" onClick={this.breadMenuToggleClick} className={styles.nav_menu1}><img className={commonstyles.image_width} src={ (naviNum === 1) ? "https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav02_on.png" : "https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav02_off.png" }   /></Link>
                        <Link to="/about" onClick={this.breadMenuToggleClick} className={styles.nav_menu2}><img className={commonstyles.image_width} src={ (naviNum === 2) ? "https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav03_on.png" : "https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav03_off.png" }   /></Link>
                        { !isLogin_render ? 
                            <Link to="/signin" onClick={this.breadMenuToggleClick} className={styles.nav_menu3}><img className={commonstyles.image_width} src={ (naviNum === 3)? "https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav04_on.png" : "https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav04_off.png" }/></Link>
                            :
                            <div className={styles.mypage_container}>
                                <Link to="/mypage" onClick={this.breadMenuToggleClick} className={styles.nav_menu4}><img className={commonstyles.image_width} src={ (naviNum === 4)? "https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav05_on.png" : "https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav05_off.png" } /></Link>
                                <div className={styles.item_contaner}>
                                    <Link to={`/mypage/profile`} onClick={this.breadMenuToggleClick} className={styles.hover_menu0}>
                                    <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav05_01_off.png" />
                                    </Link>
                                    <Link to={`/mypage/mycollection/`} onClick={this.breadMenuToggleClick} className={styles.hover_menu1}>
                                    <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav05_02_off.png" />
                                    </Link>
                                    <Link to={`/mypage/mywallet/`} onClick={this.breadMenuToggleClick} className={styles.hover_menu2}>
                                    <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav05_03_off.png" />
                                    </Link>
                                    <Link to={`/logout/`} onClick={this.breadMenuToggleClick} className={styles.hover_menu3}>
                                    <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_top_nav05_04_off.png" />
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;