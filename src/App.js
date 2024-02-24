import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <div className='HomePageContainer'>
          <div className='naveBar'>
          <Navbar />
          </div>
        
        <div className='rightSideContent'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
        </div>

        </div>
        
      </Router>
    </>
  );
}

export default App;