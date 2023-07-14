import './styles.css'
import PhotoGallery from '../../ui/PhotoGallery'

export default function PhotoGalleries() {
  return (
    <div className='galleries-container'>
      <div className='gallery-title'>
        <p>ছবি গ্যালারী</p>
      </div>
      <div className='galleries-body'>
        <PhotoGallery/>
        <PhotoGallery/>
      </div>
    </div>
  )
}
