import React from 'react';
import Home from './home.js';
import Post from './postForm.js';
import Search from './search.js';
import { Switch, Route } from 'react-router-dom'

const Main = () => {
	return(
		<main>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route 
					path='/post' 
					render={(props) => <Post {...props} />}
				/>
				<Route 
					path='/search' 
					render={(props) => <Search {...props} />}
				/>
			</Switch>
		</main>
	)
};

export default Main;