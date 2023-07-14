import './styles.css'
import ArrowIcon from '../../assets/icons/arrow_right.svg'

import NoticeBoardBackground from '../../assets/globe-notice-board.png'

function NoticeBoard() {
  return (
    <div className='notice-board' 
      style={{  backgroundImage:  `url(${NoticeBoardBackground})`, 
                backgroundRepeat:"no-repeat", 
                backgroundPosition:'left top'}}>
      {/* <div className='notice-contents'> */}
        <div className='notice-title'>নোটিশ</div>
        <div className='notice-items'>
            <span><img src={ArrowIcon} alt="" /> <a href="#">ড্রাইভিং প্রশিক্ষক নিয়োগ বিজ্ঞপ্তি... </a> </span> 
            <span><img src={ArrowIcon} alt="" /> <a href="#">মে-আগস্ট সেশনে বিনা কোর্স ফি-তে মোটর ড্রাইভিং উইথ বেসিক মেইনটেইন্যান্স কোর্সে ভর্তি... </a> </span> 
            <span><img src={ArrowIcon} alt="" /> <a href="#">ট্রেডসমূহের সবস্টোর/লাইব্রেরী/সিকিউরিটি/স্পোর্টস গুডস/ একাডেমিক/মেইন স্টোর ভেরিফ... </a> </span> 
            <span><img src={ArrowIcon} alt="" /> <a href="#">নারায়ণগঞ্জ টিএসসি-তে ই-গভর্ন্যান্স উদ্ভাবন কর্মপরিকল্পনা ২০২২-২৩ বাস্তবায়ন সংক... </a> </span> 
            <span><img src={ArrowIcon} alt="" /> <a href="#">নবম শ্রেণির ফলাফল ২০২২.... </a> </span> 
        </div>
        <button className='all-notice-btn'>সকল নোটিশ</button>
      {/* </div> */}
            
    </div>
  )
}

export default NoticeBoard
