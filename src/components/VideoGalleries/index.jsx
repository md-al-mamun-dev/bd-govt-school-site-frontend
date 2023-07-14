import './styles.css'
import Video from '../../ui/Video'


export default function VideoGalleries() {
  return (
    <div className='galleries-container'>
      <div className='gallery-title'>
        <p>ভিডিও গ্যালারী</p>
      </div>
      <div className='galleries-body'>
        <Video/>
        <Video/>

      </div>
    </div>
  )
}
