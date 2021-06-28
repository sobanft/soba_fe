import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/SobaKitNavigation.module.css'

function SobaKitNavigation(){
    return (
        <div className={styles.nav}>
            <Link to="/sobakit/all" className={styles.nav_menu0}><img src="https://image.soribada.com/image/sobanft/images/web/img_w_tab_sobakit01_off.png" /></Link>
            <Link to="/sobakit/boostup" className={styles.nav_menu1}><img src="https://image.soribada.com/image/sobanft/images/web/img_w_tab_sobakit02_off.png" /></Link>
            <Link to="/sobakit/bulkup" className={styles.nav_menu1}><img src="https://image.soribada.com/image/sobanft/images/web/img_w_tab_sobakit03_off.png" /></Link>
            <Link to="/sobakit/boomup" className={styles.nav_menu1}><img src="https://image.soribada.com/image/sobanft/images/web/img_w_tab_sobakit04_off.png" /></Link>
        </div>
    );
}

export default SobaKitNavigation;