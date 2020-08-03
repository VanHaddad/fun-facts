import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import CreateFact from "./components/create-fact";
import FactsList from "./components/facts-list";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={FactsList} />
        <Route path="/create" component={CreateFact} />
      </div>
    </Router>
  );
}

export default App;
