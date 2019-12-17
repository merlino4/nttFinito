import React from 'react';
import img from '../../src/assets/img/attivita_1.jpg'
import '../style/result.css'

class Results extends React.Component {
    render() {

        const {
            treeResult,
            results
        } = this.props





        const selectedResultsFilter = results.filter(r => {
            if (!treeResult) {
                return false;
            }
            return treeResult.includes(r.id)
        })
        const renderMap = selectedResultsFilter.map(res => (
            <div className="finalCard">                
                <div className="resultDesktop">
                    <div className="results" key={res.id}>
                        <div className="resultTitle">
                            <h2>{res.title}</h2>
                        </div>
                        <div className="contentResult">
                            <div className="resultPhoto">
                                <img src={img} alt="immagine"></img>
                            </div>
                            <div className="resultDescription">
                                <p>{res.description}</p>
                            </div>
                        </div>
                        <div className="redirectButton">

                            <a href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hvr-wobble-horizontal"
                            >

                                ecco cosa abbiamo trovato per te </a>



                        </div>
                    </div>
                </div>
            </div>

        )


        )

        return (
            <div className="lasttitle">
            <h1>ecco cosa abbiamo trovato per te</h1>
            <div>{renderMap}</div>;
          </div>
    
        );
    }
}



export default Results;