import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import ContentHub from "./components/pages/ContentHub";
import Partners from "./components/pages/Partners";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import PastEvents from "./components/pages/PastEvents";
import UpcomingEvents from "./components/pages/UpcomingEvents";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewFooter } from "./components/Footer/NewFooter"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/content-hub" exact component={ContentHub} />
        <Route path="/partners" exact component={Partners} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/past" exact component={PastEvents} />
        <Route path="/upcoming" exact component={UpcomingEvents} />
      </Switch>
      <NewFooter />
    </Router>
  );
}

export default App;
