import React from 'react';
import axios from 'axios';
import img from '../../src/assets/img/attivita_1.jpg'
import '../style/result.css'

class Results extends React.Component {
    render() {

        const {
            treeResult,
            results
        } = this.props



        // const selectedResults = treeResult.map(resultId => {
        //     if (!treeResult) {
        //         return false;
        //     }
        //     return results.find(r => r.id === resultId)
        // }
        // )

        const selectedResultsFilter = results.filter(r => {
            if (!treeResult) {
                return false;
            }
            return treeResult.includes(r.id)
        })
        const renderMap = selectedResultsFilter.map(res => (
            <div className="finalCard">
                <h1>ecco cosa abbiamo trovato per te</h1>
                <div className="resultDesktop">
            <div className="results" key={res.id}>
            <div className="resultTitle">
                <h2>{res.title}</h2>
                </div>
                <div className="contentResult">
                <div className="resultPhoto">
                <img  src={img} alt="immagine"></img>
                </div>
                <div className="resultDescription">
                <p>{res.description}</p>
                </div>
                </div>
                <div className="redirectButton">    
                
                <a href={res.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transitionButton, hover-3"
                >
                    vai allo store</a>
                 
                </div>
                </div> 
            </div>
            </div>

        )


        )
       // console.log(treeResult);
        return (
            <div>
                {renderMap}
            </div>
        );
    }
}
// //selection = [0,4,5,8]

// const resultIds = wizard.navigate([0, 0, 0, 0], tree, 4);




// console.log(JSON.stringify(selectedResults, null, 2))


export default Results;