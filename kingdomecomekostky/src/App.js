import React, { Component } from "react";
import { connect } from "react-redux";
import Kostky from "../src/js/Components/Kostky/Kostky";
import "./App.css";
//import { actionCreators } from "../store/store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div align="center">
        <Kostky />
      </div>
    );
  }
}
const mapDispatchToProps = {};

const mapStateToProps = state => ({});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
