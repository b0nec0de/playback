import React, { Component } from 'react';
import Playback from '../Playback/Playback';
import Progressbar from '../Progressbar/Progressbar';
import './Controls.css';


class Controls extends Component {
    render() {
        return (
            <div className="controls">
               <Playback />
               <Progressbar /> 
            </div>
        );
    }
}

export default Controls;
