import React from 'react';
import './Track.css';

const Track = (props) => {
    
    return (
        <div className="track">
            <div className="track__leftpart">
                <span className="track__leftpart_artist">
                    {props.artist}
                </span>
                <span className="track__leftpart_trackname">
                    {props.track}
                </span>
            </div>
            <div className="track__rightpart">
                <span className="track__rightpart_time">
                    {props.time}
                </span>
            </div>   
        </div>
    );
};

export default Track;
