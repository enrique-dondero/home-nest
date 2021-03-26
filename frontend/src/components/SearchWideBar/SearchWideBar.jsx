import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import './style.scss';
import CardBox from '../CardBox';

export default function SearchWideBar() {
    return (
        <CardBox className="search-wide-bar" padding="15px 30px">
            <FontAwesomeIcon className="list-icon" icon={faSearch} />
            <input className="search-input" type="text" placeholder="Search..." />
            <FontAwesomeIcon className="list-close icon-btn" icon={faTimesCircle} />
        </CardBox>
    );
}
