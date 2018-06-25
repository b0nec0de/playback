import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls';
import Search from '../Search/Search';
import Tracklist from '../Tracklist/Tracklist';


const tracklist = [
    {
        id: 1,
        artist: 'Jon Bon Jovi',
        track: 'Living on a prayer',
        time: '3:25'
    },
    {
        id: 2,
        artist: 'Aerosmith',
        track: 'Dream on',
        time: '4:10'
    },
    {
        id: 3,
        artist: 'Pompeya',
        track: 'Power',
        time: '3:40'
    }
]

class App extends Component {
	constructor(props) {
        super(props);
			
		this.state = { 
			tracklist,
			searchValue: ''
		} 
		
    this.onSearchChange = this.onSearchChange.bind(this); 
    };

    onSearchChange(e) {
		this.setState({
			searchValue: e.target.value
		})
	};

	render() {
		
		return (
			<div className="App">
				<div className="container">
					<div className="wrapper">
						<Controls />
						<Search 
							value={this.state.searchValue}
							onChange={this.onSearchChange}
						/>
						<Tracklist
							pattern={this.state.searchValue}
							list={this.state.tracklist}
						/>
					</div>
				</div>		
			</div>
		);
	}
}

export default App;
