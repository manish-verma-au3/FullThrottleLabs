import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import MyCalander from './pages/MyCalander';
function App() {
  return (
    <Router>
    <Switch>
     <div className='App'>
     <Route exact path="/" component={Home}/>
      <Route path='/calander' component={MyCalander}/> 
     </div>
    </Switch>
</Router>
  );
}

export default App;
