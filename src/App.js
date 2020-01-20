import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import 'zfd/dist/zfd.css';
import Home from './Components/Home';
import Alert from './Components/Alert';
import Icon from './Components/Icon';
import Pie from './Components/PieChart';
import InputChange from './Components/InputChange';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className='App-header-title'>
            ZF-Design Components Test Check The Fallow Link
          </div>
          <div className='App-header-nav'>
            <span className='App-link'><Link to='/'>Home</Link></span>
            <span className='App-link'><Link to='/alert'>Alert</Link></span>
            <span className='App-link'><Link to='/icon'>Icon</Link></span>
            <span className='App-link'><Link to='/pie'>PieChart</Link></span>
            <span className='App-link'><Link to='/inputchange'>InputChange</Link></span>
          </div>
        </header>
        <div className='App-container'>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/alert'><Alert /></Route>
            <Route path='/icon'><Icon /></Route>
            <Route path='/pie'><Pie /></Route>
            <Route path='/inputchange'><InputChange /></Route>
          </Switch>
        </div>
      </div>      
    </Router>
  );
}

export default App;
