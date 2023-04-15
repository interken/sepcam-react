import React from 'react'
import Navbar from '../component/Navbar/Navbar'

function Churchonline() {
  return (
   <div>
      <Navbar/>
    
    <nav className="word-coc-blog">
        <h1><b>CHURCH ONLINE</b></h1>
    </nav>  
   
    <main style={{backgroundColor: 'rgba(240, 244, 195, 0.43)'}}>
        <div className="container col-xl-10 col-xxl-8 px-0 py-2">
            <div className="row align-items-center g-lg-0 py-3">
            <div className="col-lg-8 text-lg-start">
                {/* Youtube Channel 
                SEPCAM CHANNEL    https://www.youtube.com/channel/UCaOMwKG_U-h23-vW9VE3prA/live */}
                 
                    <iframe width="100%" height="550px" src="https://www.youtube.com/embed/9bAG5DVgsCY" title="SEPCAM on YouTube player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-md-10 mx-auto px-5 col-lg-4 border-0">
                <div className="card" style={{height: '16rem', backgroundColor: '#002171', textAlign: 'center'}}>
                    <span  style={{height: '16rem', backgroundColor: '#002171', textAlign: 'center'}}>
                        <h5  style={{marginTop: '5em'}}>
                            {/* Facebook Page  */}
                          <a href="https://www.facebook.com/sepcamedia/live" target="_blank" rel="noreferrer"> <img src="/images/Frame 15 (1).png" alt="Sepcam live Service on Facebook"/></a>
                        <a href="https://www.facebook.com/sepcamedia/live" target="_blank" rel="noreferrer"> <img src="/images/Frame 16 (2).png" alt=""/></a>
                        </h5>
                    </span>
                  <div className="card-body" style={{backgroundColor: 'rgba(240, 244, 195, 0.43)'}}>
                    <h5 className="card-title" style={{width: 324}}><b>Are you here for the first time?</b></h5>
                    <p className="card-text" style={{textAlign: 'left'}}>We are glad to welcome you to our platform, get in touch with us and fill out the form below.</p> <br/><br/>
                    <a href="/" style={{marginLeft: '6em'}}> <button className="btn btn-lg btn-primary" type="submit" ><i>First Timer' Form</i></button></a>
                  </div>
                </div>
              </div>
            </div>
        </div>            
    </main>
    <div>
        <div className="py-2">
         <div className="container my-5">
             <div className="row p-4 pb-0 pe-lg-0 pt-lg-5">
                {/* MixLR Link 
                 <img src="/images/Mixlr Page 1.png" alt="Mixlr" style="width: 1405px; height: 288px;"/> */}
                 <iframe src="https://mixlr.com/users/7896621/embed?artwork=false&color=#003cc7" frameborder="0" scrolling="no" height="180px" width="100%"></iframe><small><a href="http://mixlr.com/sepcam" style={{color: '#fff', display: 'block', fontFamily: 'Helvetica,sans-serif', fontSize: 11, textAlign: 'left'}}>sepcam is on Mixlr</a></small> 
             </div>               
           </div>
       </div>     
    </div>
    <div className="row">      
        <div className="col-md-3 w-100" style={{textAlign: 'center'}}>
          <b><h1>Stay Connected and be Blessed</h1></b>
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
    </div>
  )
}

export default Churchonline
