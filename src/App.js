import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact patch="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
