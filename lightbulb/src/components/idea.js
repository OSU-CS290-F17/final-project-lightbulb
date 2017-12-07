import React, { Component } from 'react';
import '../styles/idea.css';

class Idea extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render = () => {
    return(
      <div class="post">
        <p>submitted by {this.props.name}</p>
      </div>
    )};
};

export default Idea;