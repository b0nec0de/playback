import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls';
import Search from '../Search/Search';
import Tracklist from '../Tracklist/Tracklist';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="wrapper">
						<Controls />
						<Search />
						<Tracklist />
					</div>
				</div>		
			</div>
		);
	}
}

export default App;
