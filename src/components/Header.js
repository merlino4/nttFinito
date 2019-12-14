import React from 'react'
import '../App.css'
import logo from "../assets/img/logo.svg";
import '../style/header.css'



const Header = () =>{
    return(
        
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-container">            
        </div>
        </div>
        
        
);
}


export default Header;