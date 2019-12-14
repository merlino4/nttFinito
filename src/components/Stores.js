import React from "react";
import {Redirect} from 'react-router-dom'
import '../style/store.css'
import Header from '../components/Header'
import stores from '../lib/stores'
import Bg from '../assets/img/bg1.jpg'


class Stores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          stores: [],
          redirect: false,
          selectedStore:undefined
        };
    }

componentDidMount(){
  stores.load()
  .then(stores => {
    this.setState({
          stores
        });
      });
    }

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/wizard' />
      }
    }
    changeStore = (e) =>{
      this.setState({
        selectedStore: e.target.value
      })
    }

    render(){
        const options = this.state.stores.map(store => (
            <option key={store.storeCode} value={store.storeCode}>
              {store.storeName}
            </option>
          ));

          
          return(
            <div className="stores">
                    <img src={Bg} className="bg" alt="bg" id="bgPhoto"/>
                    <Header 
                    className ="backgroundLogo"/>
                    <div className="content">
                     <select value={this.state.selectedStore} onChange={this.changeStore}> 
                     <option value=""> Select a store </option>
                       {options} 
                       </select>
                     {this.renderRedirect()}
                    <div className="contentButton">
                     <button 
                     onClick={this.setRedirect} 
                     className="bottone" 
                     disabled={!this.state.selectedStore}>
                      <span>Continua</span></button>
                      </div>
                     </div>
                     {/* <iframe  
                     src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d44787.87358807554!2d9.2356191!3d45.4447773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1576140021350!5m2!1sit!2sit"
                     className="mappa"
                     >
                     </iframe> */}
              </div>
          );
      }
  }

export default Stores;
