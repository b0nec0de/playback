import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';


const Tracklist = (props) => {

    const isSearched = (searchValue) => item => 
		item.artist.toLowerCase().includes(searchValue.toLowerCase());

    return (
        <div className="tracklist">
            {props.list.filter(isSearched(props.pattern)).map(item => (
                <Track
                    key={item.id}
                    artist={item.artist}
                    track={item.track}
                    time={item.time}
                />
            ))}   
        </div>
    );
}

export default Tracklist;
