import './styles.css'
import ArrowIcon from '../../assets/icons/arrow_right.svg'
import CampusSVG from '../../assets/campus-icon.svg'




export default function Feature() {
  return (
    <div className='feature-container'>
        <div className='feature-name'> ক্যাম্পাস </div>
        <div className='feature-body'>
            <img src={CampusSVG} alt="" />
            <div className='feature-options'>
                <div className='option'>
                    <img className='arrow-icon' src={ArrowIcon} alt="" /> <p>আমাদের কলেজ</p>
                </div>
                <div className='option'>
                    <img className='arrow-icon' src={ArrowIcon} alt="" /> <p>ইতিহাস</p>
                </div>
                <div className="option">
                    <img className='arrow-icon' src={ArrowIcon} alt="" /> <p>লক্ষ ও উদ্দেশ্য</p>
                </div>
                <div className="option">
                    <img className='arrow-icon' src={ArrowIcon} alt="" /> <p>প্রাতিষ্ঠানিক কাঠামো</p>                    
                </div>
                <div className="option">
                    <img className='arrow-icon' src={ArrowIcon} alt="" /> <p>প্রাতিষ্ঠানিক অবকাঠামো</p>
                </div>
                <div className="option">
                    <img className='arrow-icon' src={ArrowIcon} alt="" /> <p>শুদ্ধাচার সংক্রান্ত তথ্য</p>
                </div>
            </div>
        </div>
    </div>
  )
}
