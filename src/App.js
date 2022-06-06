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
import AlertState from './context/alert/AlertState';
import Login from './component/Login';
import Signup from './component/Signup';
import Alert from './component/Alert';

function App() {
  return (
    <>
    <NoteState>
      
    <Router>
     
        <Navbar/>
        <AlertState>
        <Alert/>
        <div className='container'>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path="/login">
            <Login />
          </Route>
          
          <Route exact path="/signup">
            <Signup />
          </Route>
          
        </Switch>
        </div>
        </AlertState>
    </Router>
    
    </NoteState>
    </>
  );
}

export default App;
