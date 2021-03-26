import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    return (
        <div className="search-bar">
            <FontAwesomeIcon className="list-icon" icon={faSearch} />
            <input type="text" placeholder="Search..." />
        </div>
    );
}
