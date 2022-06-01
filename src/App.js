import Navbar from './component/Navbar';
import About from './component/About';
import Home from './component/Home';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
    <Router>
     
        <Navbar/>
        <div className='container'>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
