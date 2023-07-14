import './styles.css'
import LeftArrow from '../../assets/icons/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg'
import RightArrow from '../../assets/icons/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg'

import sliderImage_0 from "../../assets/slider-image/slider-image-0.jpeg"
import sliderImage_1 from "../../assets/slider-image/slider-image-1.jpeg"
import sliderImage_2 from "../../assets/slider-image/slider-image-2.webp"
import sliderImage_3 from "../../assets/slider-image/slider-image-3.jpg"
import sliderImage_4 from "../../assets/slider-image/slider-image-4.jpeg"


import { useState } from 'react'

export default function ImageSlider() {

  const images = [
    {
      title:'sample title image _0',
      url:sliderImage_0
    },
    {
      title:'sample title image _1',
      url:sliderImage_1
    },
    {
      title:'sample title image _2',
      url:sliderImage_2
    },
    {
      title:'sample title image _3',
      url:sliderImage_3
    },
    {
      title:'sample title image _4',
      url:sliderImage_4
    },
  ]


  const [currentImageIndex, setCurrentImageIndex] = useState(0)


  const leftArrowFunction = ()=>{
    if(currentImageIndex === 0){
      setCurrentImageIndex(images?.length-1)
    }else{
      setCurrentImageIndex(currentImageIndex-1)
    }
  }

  const rightArrowFunction = ()=>{
    if(currentImageIndex < images?.length-1){
      setCurrentImageIndex(currentImageIndex+1)
    }else{
      setCurrentImageIndex(0)
    }
  }


  return (
    <div className='slider-container'  style={{
      backgroundImage: `url(${images[currentImageIndex].url})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

    }} >
      <img className='slider-btn left-btn' onClick={leftArrowFunction}  src={LeftArrow} alt="" />
      <img className='slider-btn right-btn' onClick={rightArrowFunction} src={RightArrow} alt="" />

    </div>
  )
}
