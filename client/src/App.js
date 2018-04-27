import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ImageGallery from "./pages/PhotoGallery";
import Nav from "./components/Nav";
import WelcomePage from "./pages/WelcomePage";

const App = () => (
  <Router>
    <div>
      <Nav />
    <Switch>
      <Route exact path="/" component={WelcomePage} />
    </Switch>
  </div>
</Router>
)

export default App;
