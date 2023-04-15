import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
            <nav className="navbar navbar-light header">
    <div className="container">
        <header className="d-flex flex-wrap">
            <a href="/" className="d-flex align-items-center  text-dark text-decoration-none">
                <img src="/log2/SEPCAM Logo (1).png" alt="SEPCAM LOGO"/>            
              <span className="fs-4 bob">THE SCEPTRE OF POWER CHRISTIAN MINISTRY</span>
            </a>
        </header>
        <form className="d-flex" role="search">
            <input className="form-control me-2 mb-4" type="search" placeholder="Search" aria-label="Search"/>
        </form>
    </div>
</nav>
<div className="nav-content">
<div className="container">
<ul className="nav justify-content-left">
    <li className="nav-item">
       
        <Link  to="/" className="nav-link">HOME</Link>
    </li>
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
            ABOUT
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{color: 'white', backgroundColor: 'rgb(0, 33, 113)'}}>
            <li><Link to="/our-call" className="dropdown-item"  style={{color: 'white'}}>OUR CALL</Link></li>
            <li><Link to="/our-history" className="dropdown-item"  style={{color: 'white'}}>OUR HISTORY</Link></li>
            <li><Link to="/leadership" className="dropdown-item" style={{color: 'white'}}>LEADRSHIP</Link></li>
            {/* <li><a className="dropdown-item" href="#" style="color: white;">OUR CONVENANT</a></li>  */}
            <li><Link to="/unit-department" className="dropdown-item" style={{color: 'white'}}>UNIT DEPARTMENT</Link></li>
        </ul>
    </li>
    
    <li className="nav-item">
       
        <Link to="/academy" className="nav-link" >ACADEMY</Link>
    </li>
    <li className="nav-item">
    
        <Link to="/church-online" className="nav-link">CHURCH ONLINE</Link>
    </li>
    
    <li className="nav-item">
     
        <Link to="/contact" className="nav-link">CONTACT</Link>
    </li>
    <li className="nav-item">
      
        <Link to="/resources" className="nav-link">RESOURCES</Link>
    </li>
    <li className="nav-item">
        
        <Link to="/blog" className="nav-link">BLOG</Link>
    </li>
</ul>
</div>
</div>
    </div>
  )
}
