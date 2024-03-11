import { BrowserRouter as Router,Route,Routes, Link, RouterProvider, BrowserRouter } from "react-router-dom"

function Navbar(){
return(
    <>
    <div className="navbarC">
        <div className="name">Kalkidan</div>
        <div className="navbarc">
            <div><Link to = "/Home" >Home</Link></div>
            <div><Link to = "/About" >About</Link></div>
            <div><Link to = "/Resume" >Resume</Link></div>
            <div><Link to = "/Skills" >Skills</Link></div>
            <div><Link to = "/Projects" >Projects</Link></div>
            <div><Link to = "/Contact" >Contact</Link></div>
        </div>
    </div>
    </>
)
}
export default Navbar