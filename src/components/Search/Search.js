import React from 'react';
import './Search.css';


const Search = (props) => {
    
    return (
        <div className="search">
            <form>
                <input
                    className="input" 
                    type='search' 
                    placeholder='Search..'
                    onChange={props.onChange}
                    value={props.value}
                    ref={el => this.inputRef = el}
                />   
            </form>
        </div>
    );
}

export default Search;
