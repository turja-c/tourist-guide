import React from 'react';
import Navbar from'./components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import COVID from './components/pages/COVID';
import Learnmore from './components/pages/Learnmore';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch> 
          <Route path='/'exact component={Home} />
          <Route path='/explore' component={Explore} />
          <Route path='/covid' component={COVID} />
          <Route path='/learn-more' component={Learnmore} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
