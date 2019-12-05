import React from 'react';
import '../style/chip.css';
import axios from 'axios';


class Chip extends React.Component {
    render(){
      const {
        active,
        title
      } = this.props;
      
      const activeClassName = active ? 'chip active' : 'chip';
  
      return (
        <div className={activeClassName}>
          <span>{title}</span>
        </div>
      )
  
    }
  }
  
  export default Chip;