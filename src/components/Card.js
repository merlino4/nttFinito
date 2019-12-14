import React from 'react';
import '../App.css';






const importAll = r => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/));
  


class Card extends React.Component {
    render() {
      const {
        answer
      } = this.props;
  
      const {
        image,
        title,
        description
      } = answer
  
      return (
        <div className="step-card">
          <a className="interactivePhoto" href="#">
          <img src={images[image]} alt="img_alt"
          onClick={() => this.props.onClick()}
          /></a>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      )
    }
  }

  export default Card;