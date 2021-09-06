import './App.css';
///////////////////////////////////////////////////////////////////
import React from 'react'
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'
import Create from './components/Create/Create'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/home" component={Navbar} />
        <Route path="/home" component={Home} />
        <Route path="/create" component={Navbar} />
        <Route exact path="/create" component={Create} />
      </React.Fragment>
    </div>
  );
}

export default App;
