import React, { Component } from 'react';
import IdeaList from '../components/ideaList.js';
import { Grid, Row, Col } from 'react-bootstrap';
import '../styles/search.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts : []
    }
    fetch('http://localhost:3000/search', {
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json()
    }).then((res) => {
      this.setState({ posts: res });
    });
  }

  render = () => {
    return(
    	<div>
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
              <IdeaList ideas={this.state.posts}></IdeaList>
            </Col>
          </Row>
        </Grid>
      </div>
    )};
};

export default Search;