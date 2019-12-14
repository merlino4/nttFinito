import React from 'react';
import '../App.css';
import '../style/cardButton.css'





// const importAll = r => {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
//   }
  
  //const images = importAll(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/));
  


class Card extends React.Component {
    render() {
      const {
        answer
      } = this.props;
  
      const {
       // image,
        title,
        id
      } = answer
      return (
        
        <div className="cardButton">
          
          <button 
            onClick={() => this.props.onClick()} 
            className="title">
                {title}              
          </button>
        </div>
      )
    }
  }

  export default Card;