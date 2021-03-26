import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

export default function UserBar() {
    return (
        <div className="current-user">
            <img className="avatar" src="/img/avatars/3.jpeg" />
            <span className="name">Hi, Mattew</span>
            <FontAwesomeIcon className="list-icon" icon={faAngleDown} />
        </div>
    );
}
