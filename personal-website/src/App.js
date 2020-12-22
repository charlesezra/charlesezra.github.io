import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import About from "./pages/About/about";
import Resume from "./pages/Resume/resume";
import Sidebar from "./components/sidebar/sidebar";

class App extends Component {
  render() {
    return (
      <div>

        <HashRouter basename='/'>
          <Sidebar />
          <Route exact path="/" component={About} />
          <Route exact path="/resume" component={Resume} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
