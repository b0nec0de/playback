import React, { Component } from 'react';
import Track from '../Track/Track';
import './Tracklist.css';


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
class Tracklist extends Component {
    constructor(props) {
        super(props);
            this.state = { 
                tracklist
            }    
    };


    render() {
        return (
            <div className="tracklist">
                <Track />
                <Track />
                <Track />
            </div>
        );
    }
}

export default Tracklist;
