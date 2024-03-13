import { BrowserRouter as Router,Route,Routes, Link, RouterProvider, BrowserRouter } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Resume from './Resume'
import Skills from './Skills'
import Projects from './Projects'
import Contact from "./Contact"




function App() {

  return (
    <Router>
  <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Resume' element={ <Resume/>} />
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Contact' element={<Contact/>}/>
 </Routes>
    </Router>
   
     /*
     
    
     

     */
      /* <>
   <Router>
      <Link to="/page2">Page2</Link>
      <Link to="/page1">Page1</Link>
      <Routes>
      <Route path='/page1' element={<Page1/>}/>

      <Route path='/page2' element={<Page2/>}/>

      </Routes>
    </Router>
    
  

      </>
      */
  )
}

export default App
