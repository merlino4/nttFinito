import React from "react";
import { Route,BrowserRouter,Switch } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import BreadCrumb from "./Breadcrumb";
import CardContainer from "./CardContainer";
import Button from "./Button";
import Results from "./Results";
import Stores from "./Stores";
import wizard from '../lib/wizard'
import Navigation from './Navigation'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
      results: [],
      tree: undefined,
      complete: false,
      selectedAnswers: [],
      activeIndex: 0
    };
    this.submitChoice = this.submitChoice.bind(this);
    this.selectChip = this.selectChip.bind(this);

  }

  selectChip(chipIndex){
    const remainingAnswers = this.state.selectedAnswers.slice(0,chipIndex)
      this.setState({
        activeIndex: chipIndex,
        selectedAnswers:remainingAnswers
      })
      console.log(remainingAnswers)
  }

  selectCard = i => {
    const { selectedAnswers, activeIndex } = this.state;
    selectedAnswers[activeIndex] = i;
    this.setState({
      selectedAnswers
    });
  };

  submitChoice() {
    const newActiveIndex = this.state.activeIndex + 1
    const completed = newActiveIndex >= this.state.steps.length;
    this.setState({
      activeIndex: newActiveIndex, completed
    });
  }

  componentDidMount() {
    wizard.load()
          .then(wizard => {
            this.setState({
                steps: wizard.steps,
                tree: wizard.tree,
                results: wizard.results
      });
    });
  }

  render() {
    const { activeIndex, steps, stores, selectedAnswers, tree, results, completed } = this.state;
    const currentSelection = selectedAnswers[activeIndex];
    const continueDisabled = typeof currentSelection !== "undefined";
    const treeResult = wizard.navigate(selectedAnswers, tree, steps.length);    
    const currentStep = steps[activeIndex];

    const cardContainer = currentStep && !completed
     ? (
      <CardContainer
        selectCard={this.selectCard}
        answers={currentStep.answers}
        question = {currentStep.question}
      />
    ) : null;

    const resultsComponent =
      completed ? (
        <Results results={results}
          treeResult={treeResult} />)
        : null;

        const button =
        !completed
            ? (<Button
                onClick={this.submitChoice}
                isActive={continueDisabled}
              />
              )
            : null; 

    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-container">

          {/* CHIP CONTAINER */}
          <BreadCrumb activeIndex={activeIndex} selectChip = {this.selectChip} steps={steps}></BreadCrumb>

          <br />

          {/* CARDS CONTAINER  */}
          {cardContainer}

          <br />

          {/* BUTTON  */}
          <div className="bottone">
          {button}
          </div>
                     
          {/*  RESULTS */}
          {resultsComponent}
          
      <BrowserRouter>
      <div>
      <Navigation/>
      <Switch>
      <Route path="/stores" component={Stores}/>
      </Switch>
      </div>
      </BrowserRouter>

        </div>
      </div>
      
    );
  }
}

export default App;
