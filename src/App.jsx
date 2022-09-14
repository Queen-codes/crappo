import { useState, useEffect} from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stats from "./components/Stats";
import Article from "./components/Article";
import Calculator from "./components/Calculator";
import Mine from "./components/Mine";
import Markets from "./components/Markets";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
 // const [count, setCount] = useState(0)
 const[menuOpen, setMenuOpen] = useState(false)

 useEffect(() => {
  window.addEventListener('load', function() { AOS.init({duration: 2500}) })
  //AOS.init({duration: 2500});
}, [])

 function handleToggler () {
  setMenuOpen(prev => !prev)
 }

  return (

    <div className="App">

        <Navbar handleToggler={handleToggler} menu={menuOpen}/>
        <Hero/>
        <Stats/>
        <Article/>
        <Calculator/>
        <Mine/>
        <Markets/>
        <Newsletter/>
        <Footer/>
      
    </div>
  )
}

export default App
