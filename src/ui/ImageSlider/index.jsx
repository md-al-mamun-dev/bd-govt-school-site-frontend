import './styles.css'
import LeftArrow from '../../assets/icons/left-angle-bracket.svg'
import RightArrow from '../../assets/icons/right-angle-bracket.svg'

export default function ImageSlider() {
  return (
    <div className='slider-container' >
      <button className='slider-btn left-btn'><img  src={LeftArrow} alt="" /></button>
      <div className='image-container'></div>
        {/* <img className='slider-img' src={slider_image_0} alt=""/>
        <img className='slider-img' src={slider_image_1} alt=""/>
        <img className='slider-img' src={slider_image_2} alt=""/>
        <img className='slider-img' src={slider_image_3} alt=""/>
        <img className='slider-img' src={slider_image_4} alt=""/> */}
      <button className='slider-btn right-btn'><img src={RightArrow} alt="" /></button>
    </div>
  )
}
