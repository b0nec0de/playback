import React from 'react';
import './Playback.css';


const Playback = () => {
    return (
        <div className="playback">
            <button type="button" className="playback__button playback__button-back">
                <span className="playback__button-triangle playback__button-triangle_back">
                </span>
                <span className="playback__button-line playback__button-line_back">
                </span>
            </button>
            <button type="button" className="playback__button playback__button-play">
                <span className="playback__button-triangle playback__button-triangle_play"></span>
            </button>
            <button type="button" className="playback__button playback__button-forward">
                <span className="playback__button-triangle playback__button-triangle_forward">
                </span>
                <span className="playback__button-line playback__button-line_forward">
                </span>
            </button>
        </div>
    );
};

export default Playback;
