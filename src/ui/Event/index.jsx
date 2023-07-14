import './styles.css'
import subornoJointiCorner from '../../assets/subontojoyonti-imag.jpg'


// style={{backgroundImage:  `url(${import.meta.env.BASE_URL + '/background-decorator-image.gif'})` }} 

export default function Event() {
  return (
    <div className='an-event-container'>
        <img src={subornoJointiCorner} alt="" />
        <button className='wide-btn'>সুবর্ণ জয়ন্তী কর্নার</button>
    </div>
  )
}
