import React from 'react';
import './App.css';
import inicio from './Componentes/inicio/inicio';
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={inicio} />
      </Switch>
    </div>
    
  );
}

export default App;
