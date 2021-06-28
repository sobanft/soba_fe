import React from 'react';
import axios from 'axios';
import styles from '../css/NoticePage.module.css';
import commonstyles from '../css/Common.module.css';
import { Link } from 'react-router-dom';

class NoticePage extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
        isLogin : true,
        noticelist : []
    }  
  }
  getBBSList = async () => {

    const {
      data : { 
        data
      },
    } = await axios.post("https://www.sobanft.com/api/bbs/board", {
      bbs_idx: this.props.match.params.idx
    });
    console.log(data);
    if(data){
      this.setState({ ...this.state,noticelist : data[0], isLoading : false });
    }
    console.log(this.state.noticelist)
  }
  componentWillMount(){
    this.getBBSList();
  }
  render(){
    const { noticelist } = this.state;
    console.log("asdsa");
    console.log(noticelist);
    const viewdate = String(noticelist.updated_at).substr(0, 10);
    return (
      <div className={commonstyles.full_width}>
        <div className={commonstyles.area_width}>
          <div className={styles.noticepage_container}>
            <div>
              <img src="https://image.soribada.com/image/sobanft/images/web/img_w_title_footer_notice.png" />
            </div>
            <hr className={commonstyles.title_line} />
            <div  className={styles.noticepage_ul_container}>
              <ul className={styles.noticepage_ul}> 
                  <li className={styles.noticepage_li}>
                    <span className={styles.noticepage_li_title}>{noticelist.title}</span> 
                    <span className={styles.noticepage_li_date}>{viewdate}</span> 
                    
                  </li>
              <pre className={styles.noticepage_contents}>
                {noticelist.contents}
              </pre>
                
              </ul>
              
            </div>
            <Link to={`/notice/`} >
              <img src="https://image.soribada.com/image/sobanft/images/web/img_w_btn_backtolist.png" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}


export default NoticePage;
