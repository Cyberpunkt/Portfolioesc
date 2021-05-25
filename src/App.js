import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// componenets
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Games from "./pages/Games";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/games">
            <Games />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
