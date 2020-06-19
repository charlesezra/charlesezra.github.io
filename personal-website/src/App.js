import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About/about";
import Resume from "./pages/Resume/resume";
import Sidebar from "./components/sidebar/sidebar";

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={About} />
            <Route exact path="/resume" component={Resume} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
