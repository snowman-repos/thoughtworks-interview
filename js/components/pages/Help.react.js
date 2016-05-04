/*
 * Help
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Help extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { projectName, ownerName } = this.props.data;
    return (
      <div>
        <h2>Help</h2>
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Help);