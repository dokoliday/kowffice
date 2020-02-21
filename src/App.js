import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
