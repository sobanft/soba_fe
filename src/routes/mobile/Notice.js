import React from 'react';
import axios from 'axios';
import styles from '../../css/mobile/Notice.module.css';
import commonstyles from '../../css/mobile/Common.module.css';
import { Link } from 'react-router-dom';

class Notice extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
        isLogin : true,
        noticelists : []
    }  
  }
  getBBSList = async () => {

    const {
      data : { 
        data
      },
    } = await axios.post("https://www.sobanft.com/api/bbs/boards", {
    });
    console.log(data);
    if(data){
      this.setState({ ...this.state,noticelists : data, isLoading : false });
    }
    // console.log(this.state.noticelists)
  }
  
  componentDidMount(){
    this.getBBSList();
  }
  render(){
    const { noticelists } = this.state;
    return (
      <div className={commonstyles.full_width_colume}>
        <div className={styles.notice_container}>
        <div className={styles.notice_title_image}>
            <img  className={commonstyles.image_width}  src="https://image.soribada.com/image/sobanft/images/mobile/img_m_title_footer_notice.png" />
          </div>
          <hr className={commonstyles.title_line} />
          <div  className={styles.notice_ul_container}>
            <ul className={styles.notice_ul}> 
            { noticelists.map((noticelist, index) => (
              <Link className={styles.title_link} to={`/notice/`+noticelist.id} >
                <li className={styles.notice_li}>
                  <span className={styles.notice_li_title}>{noticelist.title}</span> 
                  <span className={styles.notice_li_date}>{noticelist.updated_at.substr(0, 10)}</span> 
                  <div className={styles.notice_li_arrow}><img className={commonstyles.image_width} src="https://image.soribada.com/image/sobanft/images/mobile/img_m_board_arrow.png" /></div> 
                </li>
              </Link>
            ))}
              
            </ul>
          </div>
        </div>
      </div>
      
      
      
    );
  }
}

export default Notice;
