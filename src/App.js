import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Header from "./components/Header";
import { formatData } from "./actions";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.formatData();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms" exact component={Rooms} />
            <Route path="/rooms/:slug" exact component={SingleRoom} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { formatData })(App);
