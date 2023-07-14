import './styles.css'

export default function PhotoGallery() {
  return (
    <div className='photo-gallery'>
      <img className='gallery-img' src={import.meta.env.BASE_URL +'./photo-gallery/G-0161f0e940b0f5b.jpg'} alt="" />
      <p className='title'>ভ্রমন</p>
      <p className='date'>22-01-22</p>
    </div>
  )
}
