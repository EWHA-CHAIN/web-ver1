import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Recruiting from "./routes/Recruiting";
import Alum from "./routes/Alum";
import Portfoilo from "./routes/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Portfolio" component={Portfoilo} />
        <Route path="/Alumni" component={Alum} />
        <Route path="/recruiting" component={Recruiting} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
