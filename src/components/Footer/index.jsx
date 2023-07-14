import './styles.css'

export default function index() {
  return (
    <div className='footer-container'>
      <div className='footer-section institute_info'>
        <div className="institute-name">ডুমুরিয়া সরকারি টেকনিক্যাল স্কুল ও কলেজ</div>
        <div className="institute-address">ডুমুরিয়া, খুলনা।</div>
        <div className='contacts'>
          <div className="phone-number">০১২৩৪৫৬৭৮৯০</div>
          <div className="email">automateitbd@gmail.com</div>
        </div>        
      </div>
      <div className='footer-section tecnical-partner-info'>
        <div className="partner-name">কারিগরি সহযোগীতায়ঃ Automate IT Limite</div>
        <div className='contacts'>
          <div className="phone-number">Phone: 09678-221323</div>
          <div className="web-address">Website: automate.com.bd</div>
        </div>
      </div>      
    </div>
  )
}
