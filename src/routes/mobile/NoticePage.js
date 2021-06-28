import React from 'react';
import axios from 'axios';
import styles from '../../css/mobile/NoticePage.module.css';
import commonstyles from '../../css/mobile/Common.module.css';
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
      <div className={commonstyles.full_width_colume}>
        <div className={styles.noticepage_container}>
          <div className={styles.noticepage_title_image}>
            <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_footer_notice.png" />
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
          <Link to={`/notice/`} className={styles.backlist_image}>
            <img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_btn_backtolist.png" />
          </Link>
        </div>
      </div>
    );
  }
}


export default NoticePage;
