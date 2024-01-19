import Image from 'next/image'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Header from "./Components/Header"
import Hero from './Components/Hero'
import About from './Components/About'
import Blogs from './Components/Blog'
import Why from './Components/Why'
import Animations from './Components/Animations'
import Slider from "./Components/Slider"
import CaseStudies from './Components/CaseStudies'
import Ready from './Components/Ready'
import Review from './Components/Review'
import Accordion from './Components/Accordion'
import Footer from './Components/Footer'
import Community from './Components/Community'
export default function Home() {
  return <>
 <Banner/>
 <Header/>
<Hero/>
<Slider/>
<Animations/>
  <Why/> 
<About/>  
 <CaseStudies/>
<Blogs/>
 <Review/>
 <Ready/> 
 <Accordion/> 
 <Community/>
 <Footer/>
  </>
}
