import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class AlertInstance extends Component {
  render = () => {
    if(this.props.display === true){
      return (
        <Alert bsStyle="warning">
          Please ensure all forms are filled before attempting to submit.
        </Alert>
      )}
      else {
        return (
          <div></div>
        )
      }
    }
};

export default AlertInstance;