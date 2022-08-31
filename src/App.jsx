import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './App.css';


function App() {

useEffect(() => {
  Aos.init({
    duration: 2500,
    delay: 300,
  })
}, [])


return (
  <div className="App">
    <h1>
      AOS TESTING <br />
      Scroll To See Animation
    </h1>
    <div className='boxContainer'> 
      <div data-aos='fade' className='box'>
        fade  
      </div>
      <div data-aos='fade-up' className='box'>
      fade-up
      </div>
      <div data-aos='fade-down' className='box'>
      fade-down
      </div>
      <div data-aos='fade-right' className='box'>
      fade-right
      </div>
      <div data-aos='fade-left' className='box'>
      fade-left
      </div>
      <div data-aos='fade-up-right' className='box'>
      fade-up-right
      </div>
      <div data-aos='fade-up-left' className='box'>
      fade-up-left
      </div>
      <div data-aos='fade-down-right' className='box'>
      fade-down-right
      </div>
      <div data-aos='fade-down-left' className='box'>
      fade-down-left
      </div>
      <div data-aos='flip-up' className='box'>
      flip-up
      </div>
      <div data-aos='flip-down' className='box'>
      flip-down
      </div>
      <div data-aos='flip-right' className='box'>
      flip-right
      </div>
      <div data-aos='flip-left' className='box'>
      flip-left
      </div>
      <div data-aos='slide-up' className='box'>
      slide-up
      </div>
      <div data-aos='slide-down' className='box'>
      slide-down
      </div>
      <div data-aos='slide-right' className='box'>
      slide-right
      </div>
      <div data-aos='slide-left' className='box'>
      slide-left
      </div>
      <div data-aos='zoom-in' className='box'>
        zoom-in  
      </div>
      <div data-aos='zoom-in-up' className='box'>
      zoom-in-up
      </div>
      <div data-aos='zoom-in-down' className='box'>
      zoom-in-down
      </div>
      <div data-aos='zoom-in-right' className='box'>
      zoom-in-right
      </div>
      <div data-aos='zoom-in-left' className='box'>
      zoom-in-left
      </div>
      <div data-aos='zoom-out' className='box'>
        zoom-out  
      </div>
      <div data-aos='zoom-out-up' className='box'>
      zoom-out-up
      </div>
      <div data-aos='zoom-out-down' className='box'>
      zoom-out-down
      </div>
      <div data-aos='zoom-out-right' className='box'>
      zoom-out-right
      </div>
      <div data-aos='zoom-out-left' className='box'>
      zoom-out-left
      </div>
    </div>
  </div>
);
}

export default App;
