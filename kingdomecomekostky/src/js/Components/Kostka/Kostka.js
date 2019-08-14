import React, { Component } from "react";
import "./Kostka.css";
import { connect } from "react-redux";
import { actionCreators } from "../../store/Reducer";

// Komponenta Kostka - Button s číslem
class Kostka extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button
        id="tlacitko"
        disabled={this.props.clicked}
        onClick={() => {
          this.props.kostkaKlik(this.props.kostkaIndex);
        }}
      >
        {this.props.number}
      </button>
    );
  }
}

const mapDispatchToProps = {
  kostkaKlik: actionCreators.kostkaKlik
};

const mapStateToProps = (state, ownProps) => ({
  clicked: state.Kostky[ownProps.index].isDisabled,
  kostkaIndex: state.Kostky[ownProps.index].index,
  number: state.Kostky[ownProps.index].cislo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kostka);
