import './App.css'
import Header from './components/Header'
import Contents from './components/Contents'
import Footer from './components/Footer'
import backgroundImage from './assets/background-decorator-image.gif'
import buttomDecoratorImage from './assets/buttom-decorator-image.png'

function App() {
  return (
    <>
      <div className="body-container" 
        style={{backgroundImage:  `url(${backgroundImage})` }} >
        <div className='body-elements'>
          <div className='padding-div'>
            <Header/>
            <Contents/>
          </div>        
          <img className='decorator-image' src={buttomDecoratorImage} alt="" />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
