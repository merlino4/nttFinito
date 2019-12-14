import React from 'react'
import '../App.css'
import logo from "../assets/img/logo.svg";
import '../style/header.css'



const Header = () =>{
    return(
        
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <section id="socialbar">
             <div class="social-overlap process-scetion mt100">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-md-10">
                          <div class="social-bar">
                              <div class="social-icons mb-3 iconpad text-center">
                                 
                                  
                                  <a href="https://www.instagram.com/leroymerlinita/?hl=it" target="_blank" rel="noopener noreferrer" class="slider-nav-item"><i class="fa fab fa-instagram"></i></a>
                                  <a href="https://twitter.com/leroymerlinita" target="_blank" rel="noopener noreferrer" class="slider-nav-item"><i class="fa fab fa-twitter"></i></a>
                                  <a href="https://www.facebook.com/leroymerlinitalia/" target="_blank" rel="noopener noreferrer" class="slider-nav-item"><i class="fa fab fa-facebook"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
         
</section>
        </header>
        <div className="App-container">            
        </div>
        </div>
        
        
);
}


export default Header;