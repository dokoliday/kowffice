import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../src/components/Home";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Shop from "./container/Shop";
import Inventory from "./container/Inventory";

import { Container } from "./components/Style";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/shop" component={Shop} />
      </Switch>
      <Footer />
    </Container>
  );
};

export default App;
