import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

export default function Status() {
    return (
        <div className="status-group">
            <div className="published-status">
                <FontAwesomeIcon className="list-icon" icon={faEye} /> Published
            </div>

            <div className="created-at">Created January 12, 2019</div>
        </div>
    );
}
