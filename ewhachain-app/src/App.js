import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Recruiting from "./routes/Recruiting";
import Alum from "./routes/Alum";
import PfRoutes from "./routes/PfRoutes";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Portfolio" component={PfRoutes} />
        <Route path="/Alumni" component={Alum} />
        <Route path="/recruiting" component={Recruiting} />
      </BrowserRouter>
    </div>
  );
}

export default App;
