import React from 'react';
import './css/App.module.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './routes/Home';
import SobaKit from './routes/SobaKit';
import About from './routes/About';
import Term from './routes/Term';
import SingIn from './routes/SingIn';
import SingUp from './routes/SingUp';
import Profile from './routes/Profile';
import MyPage from './routes/MyPage';
import RecoveryPassword from './routes/RecoveryPassword';
import ResetPassword from './routes/ResetPassword';
import RecoveryPasswordDone from './routes/RecoveryPasswordDone';
import MyCollection from './routes/MyCollection';
import MyWallet from './routes/MyWallet';
import Privacy from './routes/Privacy';
import Notice from './routes/Notice';
import Error404 from './routes/Error404';
import NoticePage from './routes/NoticePage';
import Logout from './routes/Logout';
import SobaKitItemDetail from './components/SobaKitItemDetail';
import Navigation from './components/Navigation';
import SobaFooter from './components/SobaFooter'
import commonstyles from './css/Common.module.css';

import MobileHome from './routes/mobile/Home';
import MobileSobaKit from './routes/mobile/SobaKit';
import MobileSobaKitItemDetail from './components/mobile/SobaKitItemDetail';
import MobileAbout from './routes/mobile/About';
import MobileSingIn from './routes/mobile/SingIn';
import MobileSingUp from './routes/mobile/SingUp';
import MobileRecoveryPassword from './routes/mobile/RecoveryPassword';
import MobileResetPassword from './routes/mobile/ResetPassword';
import MobileRecoveryPasswordDone from './routes/mobile/RecoveryPasswordDone';

import MobileMyPage from './routes/mobile/MyPage';
import MobileProfile from './routes/mobile/Profile';
import MobileMyCollection from './routes/mobile/MyCollection';
import MobileMyWallet from './routes/mobile/MyWallet';

import MobilePrivacy from './routes/mobile/Privacy';
import MobileNotice from './routes/mobile/Notice';
import MobileError404 from './routes/mobile/Error404';
import MobileNoticePage from './routes/mobile/NoticePage';
import MobileTerm from './routes/mobile/Term';

import MobileNavigation from './components/mobile/Navigation';
import MobileSobaFooter from './components/mobile/SobaFooter'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";



function App(){
  return (
    <div className={commonstyles.main_container}>
      { isBrowser ? 
      <BrowserView>
        <BrowserRouter>
            <Route exact={true} component={Navigation} />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/sobakit" exact={true} component={SobaKit} />
            <Route path="/sobakit/product/:id" exact={true} component={SobaKitItemDetail} />
            <Route path="/sobakit/:category" exact={true} component={SobaKit} />
            <Route path="/mypage" exact={true} component={MyPage} />
            <Route path="/mypage/profile" exact={true} component={Profile} />
            <Route path="/mypage/mycollection" exact={true} component={MyCollection} />
            <Route path="/mypage/mywallet" exact={true} component={MyWallet} />
            <Route path="/about" exact={true} component={About} />
            <Route path="/signin" exact={true} component={SingIn} />
            <Route path="/signup" exact={true} component={SingUp} />
            <Route path="/recoverypassword" exact={true} component={RecoveryPassword} />
            <Route path="/resetpassword" exact={true} component={ResetPassword} />
            <Route path="/recoverypassword/done" exact={true} component={RecoveryPasswordDone} />
            <Route path="/notice" exact={true} component={Notice} />
            <Route path="/notice/:idx" exact={true} component={NoticePage} />
            <Route path="/terms" exact={true} component={Term} />
            <Route path="/privacy" exact={true} component={Privacy} />
            <Route path="/logout" exact={true} component={Logout} />
            <Route component={Error404} />
          </Switch>
          <SobaFooter />
        </BrowserRouter>
      </BrowserView>
      :
      <MobileView>
        <BrowserRouter>
          <Route exact={true} component={MobileNavigation} />
          <Switch>
          <Route path="/" exact={true} component={MobileHome} />
          <Route path="/sobakit" exact={true} component={MobileSobaKit} />
          <Route path="/sobakit/product/:id" exact={true} component={MobileSobaKitItemDetail} />
          <Route path="/about" exact={true} component={MobileAbout} />
          <Route path="/sobakit/:category" exact={true} component={MobileSobaKit} />
          <Route path="/signin" exact={true} component={MobileSingIn} />
          <Route path="/signup" exact={true} component={MobileSingUp} />
          <Route path="/recoverypassword" exact={true} component={MobileRecoveryPassword} />
          <Route path="/resetpassword" exact={true} component={MobileResetPassword} />
          <Route path="/recoverypassword/done" exact={true} component={MobileRecoveryPasswordDone} />

          <Route path="/mypage" exact={true} component={MobileMyPage} />
          <Route path="/mypage/profile" exact={true} component={MobileProfile} />
          <Route path="/mypage/mycollection" exact={true} component={MobileMyCollection} />
          <Route path="/mypage/mywallet" exact={true} component={MobileMyWallet} />
          
          <Route path="/notice" exact={true} component={MobileNotice} />
          <Route path="/notice/:idx" exact={true} component={MobileNoticePage} />
          <Route path="/terms" exact={true} component={MobileTerm} />
          <Route path="/privacy" exact={true} component={MobilePrivacy} />
          <Route path="/logout" exact={true} component={Logout} />
          <Route component={MobileError404} />
          </Switch>
        <MobileSobaFooter />
      </BrowserRouter>
      </MobileView>
      }
    </div>
  );
}

export default App;
