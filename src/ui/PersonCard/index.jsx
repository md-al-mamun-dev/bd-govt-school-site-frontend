import './styles.css'
import directorPhoto from '../../assets/director_general.jpg'

export default function PersonCard() {
  return (
    <div className='person-card-container'>
        <div className='card-title'>
            <p>মহাপরিচালক</p>
        </div>
        
        <img className='card-img' src={directorPhoto} alt="" />
        
        <div className='card-info'>
            <div className='info-name'>
              মোঃ সালাহউদ্দিন আহাম্মদ
            </div>
            <div className='info-address'>
              কারিগরি শিক্ষা অধিদপ্তর              
            </div>
            <div className='quote'>
              বানী..........
            </div>         
        </div>

    </div>
  )
}
