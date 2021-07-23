import "./App.css";
import { Route, Switch } from "react-router";
import Shop from "./Pages/Shop";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import Promotion from "./Pages/Promotion";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/promotion">
          <Promotion />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
