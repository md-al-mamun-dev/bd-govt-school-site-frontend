import './styles.css'
import AudioPlayer from '../../ui/AudioPlayer'

export default function NationalAnthem() {
  return ( 
    <div className='national-anthem-container'>
    <div className='title'>
            <p> জাতীয় সংগীত </p>
        </div>
        <AudioPlayer/>
    </div>
    
  )
}
