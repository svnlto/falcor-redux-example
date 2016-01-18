import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxFalcor } from 'redux-falcor';

class App extends Component {

  constructor(props) {
    super(props);
  }

  fetchFalcorDeps() {
    return this.props.falcor.get('greeting');
  }

  render() {
    const { greeting } = this.props;

    return (
      <p>{greeting}</p>
    );
  }
}

App.propTypes = {
  falcor: PropTypes.object,
  greeting: PropTypes.string
};

function mapStateToProps(state) {
  return {
    greeting: state.falcor.greeting
  };
}

export default connect(
  mapStateToProps
)(reduxFalcor(App));
