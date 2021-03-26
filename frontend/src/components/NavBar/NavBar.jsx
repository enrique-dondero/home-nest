import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import SearchBar from "../SearchBar/SearchBar";
import UserBar from "../UserBar/UserBar";

export default function NavBar() {
    return (
        <div>
            <div className="row topnav">
                <div className="col-auto logo-col d-none d-md-block">
                    <img src="/img/logo.jpg" width="47" height="47" alt="Logo"/>
                </div>
                <div className="col">
                    <div className="d-flex">
                        <div className="flex-fill">
                            <button className="btn-flat btn-back">
                                <FontAwesomeIcon className="list-icon" icon={faArrowLeft}/> All profiles
                            </button>
                        </div>
                        <div className="d-none d-md-block">
                            <SearchBar/>
                            <UserBar/>
                        </div>
                    </div>
                </div>
            </div>
</div>
    );
}
