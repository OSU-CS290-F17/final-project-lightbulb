import React from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../styles/home.css';

const Home = () => (
	<div>
    <Grid>
      <Row>
        <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
					<Jumbotron bsClass="jumbotron main-jumbo">
						<h1 class="brand">lightbulb</h1>
						<p class="slogan">a platform to share your ideas</p>
						<p className="button-list">
							<Link to="/search"><Button bsClass="btn btn-primary link-button">explore</Button></Link>
							<Link to="/post"><Button bsClass="btn btn-primary link-button">create</Button></Link>
						</p>
					</Jumbotron>
				</Col>
      </Row>
    </Grid>
  </div>
);

export default Home;