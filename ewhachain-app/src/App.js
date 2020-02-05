import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Recruiting from "./routes/Recruiting";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>a</div>

      </header>
      <Header />
      <BrowserRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/recruiting" component={Recruiting} />
      </BrowserRouter>
    </div>
  );
}

export default App;
