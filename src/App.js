import React from 'react';
import './App.css';
import carrusel from './Componentes/carrusel/carrusel';
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={carrusel} />
      </Switch>
    </div>
    
  );
}

export default App;
