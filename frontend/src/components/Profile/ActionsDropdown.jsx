import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from 'react-bootstrap';

export default function ActionsDropdown({ open, handleClicked }) {
    let dropdownMenuClasses = 'dropdown-menu';
    if (open) {
        dropdownMenuClasses += ' show';
    }

    return (
        <div>
            {/*<Dropdown>*/}
            {/*    <Dropdown.Toggle variant="primary">*/}
            {/*        Actions*/}
            {/*    </Dropdown.Toggle>*/}

            {/*    <Dropdown.Menu>*/}
            {/*        <Dropdown.Item href="#/action-1">Hide user from site</Dropdown.Item>*/}
            {/*        <Dropdown.Item href="#/action-2">Remove user</Dropdown.Item>*/}
            {/*    </Dropdown.Menu>*/}
            {/*</Dropdown>*/}

            <div className="dropdown">
                <button className="actions-dropdown btn-flat" style={{color: '#fff'}} type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false"
                        onClick={handleClicked}
                >
                    Actions <FontAwesomeIcon className="list-icon" icon={faAngleDown} />
                </button>
                <div className={dropdownMenuClasses} aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Hide user from site</a>
                    <a className="dropdown-item" href="#">Remove user</a>
                </div>
            </div>

            {/*Actions <FontAwesomeIcon className="list-icon" icon={faAngleDown} />*/}
        </div>
    );
}
