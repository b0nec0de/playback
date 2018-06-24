import React from 'react';
import './Track.css';

const Track = () => {
    return (
        <div className="track">
            <div className="track__leftpart">
                <span className="track__leftpart_artist">
                    Artist
                </span>
                <span className="track__leftpart_trackname">
                    Track
                </span>
            </div>
            <div className="track__rightpart">
                <span className="track__rightpart_time">
                    Time
                </span>
            </div>   
        </div>
    );
};

export default Track;
