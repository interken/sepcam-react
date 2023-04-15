import React from 'react'
import Navbar from '../component/Navbar/Navbar'

function UnitDepartment() {
  return (
    <div classNameName='best'>
        <Navbar/>

<nav className="word-lead-unit">
  <h1><b>UNIT/DEPARTMENT</b></h1>
</nav>  

<main>
  <div className="container py-4">
      <div className="row align-items-md-stretch">
          <div className="col-md-12">
              <div className="h-100 p-5 text-black best rounded-3">
                  <h2 style={{fontWeight: 700, fontSize: '30px', lineHeight: '32px', color: '#002171'}}>LIST OF UNITS & DEPARTMENT</h2>
                  <p>
                    <ol style={{fontWeight: 400, fontSize: '30px', lineHeight: '36px'}}>
                      <li>
                        Children
                      </li>
                      <li>
                        Choir
                      </li>
                      <li>
                        Decorating
                      </li>
                      <li>
                        Drama
                      </li>
                      <li>
                        Evangelism 
                      </li>
                      <li>
                        Library
                      </li>
                      <li>
                        Prayer 
                      </li>
                      <li>
                        Sanitation 
                      </li>
                      <li>
                       Technical/Media 
                      </li>
                      <li>
                        Ushering 
                      </li>
                      <li>
                        Welfare
                      </li>
                    </ol>
                  </p>                        
                  <br></br>      
              </div>
          </div>
      </div>
  </div>
</main>

<footer>
    <div classNameName="footer-text">
        <p>
            <img src="/logs/location-pin.png" alt="locationPng" width="30" height="30"/>
            <span>Plot 31-32 Ifelodun Estate, Behind Wesco Estate,<br/>Off Akure-Ilesa Expressway, Akure, Ondo State</span>
        </p>
    </div>
    <div classNameName="footer-img">
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

export default UnitDepartment