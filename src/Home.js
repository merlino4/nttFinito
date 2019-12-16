import React from "react";
import { Route,BrowserRouter,Switch } from "react-router-dom";
import Navigation from './components/Navigation'
import Stores from "./components/Stores";
import Wizard from "./components/Wizard"



const Home = () => {
    return(
        <BrowserRouter>
        <div>
        <Navigation/>
        <Switch>
        {/* <Route exact path={`${process.env.REACT_APP_API_URL}/wizard`} component={Wizard} />
        <Route path={`${process.env.REACT_APP_API_URL}/`} component={Stores} /> */}
        <Route  exact path="/" component={Stores}/>
        <Route  exact path="/wizard" component={Wizard}/>
        </Switch>
        </div>
        </BrowserRouter>
    )
}

export default Home;