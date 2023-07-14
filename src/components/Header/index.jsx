import './styles.css'
import pagebanner from '../../assets/page-banner.jpg'
import Navbar from '../Navbar'

const LanguageBar = () => {
  return (
    <div className='lang-bar'>
      <a href="#">Bangali</a>
      <a href="#">English</a>
    </div>
  )
}

const Banner = () => {
  return (
    <div className='banner'>
      <img src={pagebanner} alt="Page Banner " />
      <div class="centered-text">ডুমুরিয়া সরকারি টেকনিক্যাল স্কুল ও কলেজ, খুলনা</div>
      

      {/* <p className='institute-name'>ডুমুরিয়া সরকারি টেকনিক্যাল স্কুল ও কলেজ, খুলনা</p> */}
    </div>
  )
}

export default function Header() {
  return (
    <>
      <div className='header'>
        <LanguageBar/>
        <Banner/>
      </div>
      <Navbar/>
    </>
  )
}