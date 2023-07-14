import './styles.css'
import RightArrowCircle from '../../assets/icons/arrow_circle_right.svg'
// import ArrowIcon from '../../assets/icons/arrow_right.svg'



export default function ImportantLinks() {

    const autdioUrl = "http://site.automate.com.bd/?load=playlist.json&amp;title=&amp;albums=584&amp;feed_title=&amp;feed=&amp;feed_img=&amp;el_widget_id=&amp;artwork=&amp;posts_per_pages=-1&amp;all_category=&amp;single_playlist=&amp;reverse_tracklist=&amp;audio_meta_field=&amp;repeater_meta_field=&amp;import_file=&amp;rss_items=-1&amp;rss_item_title="
  return (
    <div className='link-container'>
        <div className='title'>
            <p> গুরুত্বপূর্ণ লিঙ্ক </p>
        </div>

        <div className='link-content'>
            <div className="imp-link-item">
                <img src={RightArrowCircle} alt="" />
                <a href="#"> আমাদের কলেজ </a>
            </div>
            <div className="imp-link-item">
                <img src={RightArrowCircle} alt="" />
                <a href="#"> ইতিহাস </a></div>
            <div className="imp-link-item">
                <img src={RightArrowCircle} alt="" />
                <a href="#"> লক্ষ্য ও উদ্দেশ্য  </a></div>
            <div className="imp-link-item">
                <img src={RightArrowCircle} alt="" />
                <a href="#"> প্রাতিষ্ঠানিক কাঠামো </a></div>
            <div className="imp-link-item">
                <img src={RightArrowCircle} alt="" />
                <a href="#"> প্রাতিষ্ঠানিক অবকাঠামো </a></div>
            <div className="imp-link-item">
                <img src={RightArrowCircle} alt="" />
                <a href="#"> শুদ্ধাচার সংক্রান্ত তথ্য </a></div>
        </div>
    </div>
  )
}
