import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Idea from './idea.js';
import Pager from 'react-pager';
import '../styles/ideaList.css';

var ideas;
var ideaList;

class IdeaList extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: 0,
      visiblePage: 3,
      indexStart: 0,
      indexEnd: 5
    }
  }

  handlePageChanged = (eventKey) => {
    this.setState({
      current: eventKey,
      indexStart: ((eventKey + 1) * 5)-5,
      indexEnd: ((eventKey + 1) * 5),      
    });
  }

  render = () => {
    ideas = this.props.ideas;
    ideaList = ideas.map((ideas) => {
      return <ListGroupItem key={ideas._id} header={ideas.content}><Idea name={ideas.name}></Idea></ListGroupItem>;
    })
    return(
      <div>
        <ListGroup bsClass="list-box">{ ideaList.slice(this.state.indexStart, this.state.indexEnd) }</ListGroup>
        <Pager total={Math.ceil(this.props.ideas.length/5)}
                current={this.state.current}
                visiblePages={this.state.visiblePage}
                onPageChanged={this.handlePageChanged}
                className="pull-middle"/>
      </div>
    )};
  
};

export default IdeaList;