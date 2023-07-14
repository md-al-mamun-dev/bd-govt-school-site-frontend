import './styles.css'
import homeIcon from '../../assets/icons/home.svg'

export default function Navbar() {
  return (
    <div className='navbar'>

      <ul className='nav-menu'>
        <li className='nav-menu-item'>
          <a href="#home">
            <img src={homeIcon} alt="" />
          </a>
        </li>

        <li className='nav-menu-item'> <a href="#campas"> ক্যাম্পাস </a>
          <ul className='nav-submenu'>
            <li className='nav-submenu-item'><a href=""> আমাদের কলেজ </a></li>
            <li className='nav-submenu-item'><a href=""> ইতিহাস </a></li>
            <li className='nav-submenu-item'><a href=""> লক্ষ্য ও উদ্দেশ্য </a></li>
            <li className='nav-submenu-item'><a href=""> প্রাতিষ্ঠানিক কাঠামো </a></li>
            <li className='nav-submenu-item'><a href=""> প্রাতিষ্ঠানিক অবকাঠামো </a></li>
            <li className='nav-submenu-item'><a href=""> শুদ্ধাচার সংক্রান্ত তথ্য </a></li>
          </ul>
        </li>

        <li className='nav-menu-item'><a href="#admisson"> ভর্তি </a>
          <ul className='nav-submenu'>
            <li className='nav-submenu-item'><a href=""> আবেদন প্রক্রিয়া </a></li>
            <li className='nav-submenu-item'><a href=""> ভর্তি পরীক্ষা </a></li>
            <li className='nav-submenu-item'><a href=""> ভর্তি নীতি </a></li>
            <li className='nav-submenu-item'><a href=""> রেজিস্ট্রেশন সিস্টেম </a></li>
            <li className='nav-submenu-item'><a href=""> বর্তমান শিক্ষা ব্যাবস্থা </a></li>
            <li className='nav-submenu-item'><a href=""> বাৎসরিক পরিকল্পনা </a></li>
          </ul>
        </li>

        <li className='nav-menu-item'><a href="#course"> কোর্সসমূহ </a>
          <ul className='nav-submenu'>
            <li className='nav-submenu-item'><a href=""> {`এসএসসি (ভোকেশনাল)`}  </a></li>
            <li className='nav-submenu-item'><a href=""> {`এইচএসসি (ভোকেশনাল)`} </a></li>
            <li className='nav-submenu-item'><a href=""> বেসিক কোর্স </a></li>
          </ul>
        </li>

        <li className='nav-menu-item'><a href="#management"> ব্যবস্থাপনা </a>
          <ul className='nav-submenu'>
            <li className='nav-submenu-item'><a href=""> মহাপরিচালক </a></li>
            <li className='nav-submenu-item'><a href=""> {`পরিচালক (ভোকেশনাল)`} </a></li>
            <li className='nav-submenu-item'><a href=""> অধ্যক্ষ্য </a></li>
            <li className='nav-submenu-item'><a href=""> আমাদের শিক্ষকমন্ডলী </a></li>
            <li className='nav-submenu-item'><a href=""> আমাদের কর্মীরা </a></li>
          </ul>
        </li>

        <li className='nav-menu-item'><a href="#academicpaper"> একাডেমিক পেপার </a>
          <ul className='nav-submenu'>
            <li className='nav-submenu-item'><a href=""> একাডেমিক সিলেবাস </a></li>
            <li className='nav-submenu-item'><a href=""> একাডেমিক প্রসপেক্টাস </a></li>
            <li className='nav-submenu-item'><a href=""> শিক্ষা বর্ষপঞ্জি </a></li>
            <li className='nav-submenu-item'><a href=""> পরীক্ষা সময়সূচী </a></li>
          </ul>
        </li>

        <li className='nav-menu-item'><a href="#student"> শিক্ষার্থী </a>
          <ul className='nav-submenu'>
            <li className='nav-submenu-item'><a href=""> বেতন </a></li>
            <li className='nav-submenu-item'><a href=""> ছাত্র ইউনিফর্ম </a></li>
            <li className='nav-submenu-item'><a href=""> পরীক্ষার ব্যাবস্থা </a></li>
            <li className='nav-submenu-item'><a href=""> নিয়ম এবং প্রবিধান </a></li>
            <li className='nav-submenu-item'><a href=""> আমাদের ছাত্র-ছাত্রী </a></li>
            <li className='nav-submenu-item'><a href=""> শিক্ষার্থীদের সাফল্যের গল্প </a></li>
            <li className='nav-submenu-item'><a href=""> উদ্ভবনী প্রকল্প </a></li>
          </ul>
        </li>

        <li className='nav-menu-item'><a href="#result"> ফলাফল </a>
          <ul className='nav-submenu'>
            <li className='nav-submenu-item'><a href=""> বোর্ড পরীক্ষার ফলাফল </a></li>
          </ul>
        </li>

        <li className='nav-menu-item'><a href="#resource"> রিসোর্স </a>
          <ul className='nav-submenu'>
            <li className='nav-submenu-item'><a href=""> ডিজিটাল ক্লাস কনটেন্ট </a></li>
            <li className='nav-submenu-item'><a href=""> গ্রন্থাগার </a></li>
            <li className='nav-submenu-item'><a href=""> কম্পিউটার ল্যাব </a></li>
            <li className='nav-submenu-item'><a href=""> খেলার মাঠ </a></li>
            <li className='nav-submenu-item'><a href=""> সহ-পাঠক্রম সংক্রান্ত কার্যক্রম </a></li>
            <li className='nav-submenu-item'><a href=""> সিটিজেন চার্টার </a></li>
          </ul>
        </li>

        <li className='nav-menu-item'><a href="#gallery"> গ্যালারি </a>
          <ul className='nav-submenu'>
            <li className='nav-submenu-item'><a href=""> ফটো গ্যালারী</a></li>
            <li className='nav-submenu-item'><a href=""> ভিডিও গ্যালারী </a></li>
          </ul>
        </li>

        <li className='nav-menu-item'><a href="#communication"> যোগাযোগ </a>
        </li>

        <li className='nav-menu-item'><a href="#fee"> ফি পেমেন্ট </a>
        </li>
      </ul>     
      
    </div>
  )
}

