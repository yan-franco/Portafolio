import React from 'react';
import './App.css';
import inicio from './Componentes/inicio/inicio';
import sobremi from "./Componentes/sobremi/sobremi"
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={inicio} />
        <Route exact path="/SobreMi" component={sobremi} />
      </Switch>
    </div>
    
  );
}

export default App;
