import './App.css'
import Header from './components/Header'
import Contents from './components/Contents'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="body-container" 
        style={{backgroundImage:  `url(${import.meta.env.BASE_URL + '/background-decorator-image.gif'})` }} >
        <div className='body-elements'>
          <div className='padding-div'>
            <Header/>
            <Contents/>
          </div>        
          <img className='decorator-image' src={import.meta.env.BASE_URL + '/buttom-decorator-image.png '} alt="" />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
