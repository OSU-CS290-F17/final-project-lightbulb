import React, { Component } from 'react';
import { Col, HelpBlock, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import AlertInstance from './alertInstance.js';
import '../styles/postForm.css';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameField: '',
      contentField: '',
      formsFilled: false,
      alertVisible: false
    }
  }

  postNewIdea() {
    this.setState({alertVisible: false});
    fetch('http://localhost:3000/post', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nameField: this.state.nameField,
        contentField: this.state.contentField
      })
    })
    this.setState({nameField: '', contentField: ''})
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});    
  }

  checkFormsFilled = () => {
    if(this.state.nameField !== '' && this.state.contentField !== ''){
      this.setState({formsFilled: true, alertVisible: false}, this.postNewIdea);
    }
    else{
      this.setState({formsFilled: false, alertVisible: true});
    }
  }

  render = () => {
    return(
      <Col xs={10} xsOffset={1} md={6} mdOffset={3}> 
        <AlertInstance display={this.state.alertVisible}></AlertInstance>
        <form>
          <FieldGroup
            id="nameField"
            type="text"
            label="Name"
            placeholder="Enter your name"
            value={this.state.nameField}            
            onChange={this.handleChange}             
          />

          <FieldGroup
            id="contentField"
            type="textarea"
            label="Idea"
            componentClass="textarea"
            placeholder="What's your idea?"
            value={this.state.contentField}
            onChange={this.handleChange}
            style={{height: 200}}             
          />
      
          <Button bsClass="btn btn-primary link-button" onClick={() => this.checkFormsFilled()}>
            Submit
          </Button>
        </form>
      </Col>
    )};
};

export default PostForm;