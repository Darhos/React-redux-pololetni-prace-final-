import React, { Component } from "react";
import "./Kostky.css";
import { actionCreators } from "../../store/Reducer";
import { connect } from "react-redux";
import Kostka from "../Kostka/Kostka";

// Komponenta reprezentující pole hrací pole kostek
class Kostky extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // Generování pole kostek
    const kostky = [];

    for (let index = 0; index !== 6; index++) {
      kostky.push(<Kostka key={index} index={index} />);
    }

    return (
      <div className="Kostky">
        <h1 id="nadpis">Kingdom Come Deliverance - Kostky</h1>
        <button onClick={this.props.handleThrow}>Hoď kostkou!</button>
        <button onClick={this.props.handleNext}>Další hod!</button>
        <button onClick={this.props.handleEnd}>Ukonči kolo!</button>
        <h1 id="body">{this.props.body}</h1>
        <div className="kosticka">{kostky}</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleThrow: actionCreators.handleThrow,
  handleNext: actionCreators.handleNext,
  handleEnd: actionCreators.handleEnd
};

const mapStateToProps = state => ({
  body: state.GameState.score
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kostky);
