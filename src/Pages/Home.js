import React from 'react'
import Navbar from '../component/Navbar/Navbar'
// import { Route,Router,Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        
<Navbar/>
{/* Hero Section */}

<div className="hero-image">
    <div className="hero-text">
        <p>welcome to</p>
        <h1>THE SCEPTRE OF POWER CHRISTIAN MINISTRY</h1>
    </div>
</div>
<div className="container-fluid text-container">
    <div className="container text-content">
    <h1>WELCOME ADDRESS</h1>
    <p>You are welcome to this website. Getting and growing people in relationship with Jesus is our mandate and we have been
    committed to this assignment from the day of the commission. That you have logged on to this site is not an accident, it
    is a positive proof that God has a great plan for your life. Moreover, you can find out information and build-up
    materials in Sceptre of Power Christian Ministry and how you can be a part of this commission. Keep Coming Back. You are
    more than a conqueror.
    </p>
</div>
</div>
<div className="container-fluid section">
    <div className="container">
    <div className="row ">
        <div className="col-md-6 section-text">
<h1>Join us to experience effectual worship and life-changing revelations from God's word.</h1>
        </div>
        <div className="col-md-6 section-btn" >
        <a href="/churchOnline.html" style={{textDecoration: 'none'}}><button type="button" className="btn btn-primary btn-lg button">
            <img src="/logs/radio.png" alt="radio-png"/>
                <span className="align-middle">WATCH LIVE</span>
        </button></a>
        <a href="/churchOnline.html" style={{textDecoration: 'none'}}><button type="button" className="btn btn-secondary btn-lg button">
            <img src="/logs/tv.png" alt="tv-png"/>
                <span className="align-middle">LISTEN LIVE</span>
        </button></a>
        </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
            <div className="col">
                <div className="card h-100">
                    <img src="/images/one (6).jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">WORSHIP SERVICE</h5>
                        <p className="card-text">Sundays | 8:30am</p>
                    </div>
                </div>
            </div>
        <div className="col">
            <div className="card h-100">
                <img src="/images/one (2).jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">BIBLE STUDY</h5>
                    <p className="card-text">Wednesdays | 5:00pm</p>
                </div>
            </div>
        </div>
            <div className="col">
                <div className="card h-100">
                    <img src="/images/one (15).jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">MONTHLY VIGIL</h5>
                        <p className="card-text">Third Fridays | 10:00pm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   

<div className="events">
    <h1>NEWS & EVENTS</h1>
    <div id="carouselExampleSlidesOnly" className="carousel slide newevents" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="/images/Poster Place Holder.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="/images/Poster Place Holder.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="/images/Poster Place Holder.png" className="d-block w-100" alt="..."/>
            </div>
        </div>
    </div>
</div>

<div className="container-fluid contact-info">
<div className="contact-content">
        <div className="contact-us">
        <h1>CONTACT US</h1>
        </div>
        <form className="contact-form">
            <div className="mb-3 mb3">        
            <input type="text" className="form-control" placeholder="Your Name*" required/>
            </div>
            <div className="mb-3 mb3">
                <input type="text" className="form-control" placeholder="Your Phone No*" required/>
            </div>
            <div className="mb-3 mb3">
                <input type="email" className="form-control" placeholder="Your Email*" required/>
            </div>
            <div className="form-floating formfloating">
                <textarea className="form-control" placeholder="Leave a comment here" style={{height: 150}}></textarea>
                <label for="floatingTextarea2">Your Message*</label>
            </div>
            <div className="contact-btn text-center">
            <button type="submit" className="btn btn-primary btn-lg">SEND</button>
            </div>
        </form> 
    </div>
</div>
<footer>
    <div className="footer-text">
        <p>
            <img src="/logs/location-pin.png" alt="locationPng" width="30" height="30"/>
            <span>Plot 31-32 Ifelodun Estate, Behind Wesco Estate,<br/>Off Akure-Ilesa Expressway, Akure, Ondo State</span>
        </p>
    </div>
    <div className="footer-img">
        <img src="/logs/Vector (1).png" alt="twitterPng"/>
        <img src="/logs/Vector (2).png" alt="youtubePng"/>
        <a href="https://www.facebook.com/sepcamedia"><img src="/logs/Vector (3).png" alt="Sepcam Facebook Page"/></a>
        <a href="https://t.me/Sepcamedia"><img src="/logs/Vector (4).png" alt="Sepcam Telegram Channel"/></a>
        <img src="/logs/Vector (5).png" alt="instagramPng"/>
        <img src="/logs/Vector (6).png" alt="Email"/>
    </div>
    <div>				
        <p id="footnote">
            ©2022.SEPCAM All Rights Reserved
        </p>
    </div>
</footer> 
    </div>
  )
}

export default Home
