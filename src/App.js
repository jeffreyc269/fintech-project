import React from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>
}
}

export default App;
