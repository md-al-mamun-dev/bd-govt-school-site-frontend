import './styles.css'
import ImageSlider from '../../ui/ImageSlider'
import ScrolledText from '../../ui/ScrolledText'
import NoticeBoard from '../../ui/NoticeBoard'
import PersonCard from '../../ui/PersonCard'
import EventCorners from '../EventCorners'
import Features from '../Features'
import PhotoGalleries from '../PhotoGalleries'
import VideoGalleries from '../VideoGalleries'
import ImportantLinks from '../../ui/ImportentLinks'
import NationalAnthem from '../NationalAnthem'


const SectionMain=() => {
  return (
    <div className='section-main'>
      <ImageSlider/>
      <ScrolledText/>
      <NoticeBoard/>
      <EventCorners/>
      <Features/>
      <PhotoGalleries/>
      <VideoGalleries/>
    </div>
  )
}

const SectionSidebar = () => {
  const directorGeneralInfo ={
    title:"",
    photoUrl:"",
    name:"",
    depertment:""
  }

  const directorInfo ={
    title:"",
    photoUrl:"",
    name:"",
    depertment:""
  }

  return (
    <div className='section-sidebar'>
      <PersonCard/>
      <PersonCard/>
      <ImportantLinks/>
      <NationalAnthem/>
    </div>
  )
}



export default function Contents() {
  return (
    <div className='main-container'>
      <SectionMain/>
      <SectionSidebar/>
    </div>
  )
}
