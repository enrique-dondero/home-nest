import React, {Component} from 'react';

import {Route} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faBars} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../components/SearchBar/SearchBar";
import UserBar from "../components/UserBar/UserBar";
import SideNav from "../components/SideNav/SideNav";

export default class DefaultLayout extends Component {
    render() {
        const {component: Component, ...rest} = this.props;

        return (
            <Route {...rest} render={matchProps => (
                <div className="container-fluid root">
                    <div className="row topnav">
                        <div className="col-auto logo-col d-none d-lg-block">
                            <img src="/img/logo.jpg" width="47" height="47" alt="Logo" />
                        </div>
                        <div className="col">
                            <div className="d-flex">
                                <div className="flex-fill">
                                    <button className="btn-flat btn-back">
                                        <FontAwesomeIcon className="list-icon" icon={faArrowLeft} /> All profiles
                                    </button>
                                </div>

                                <div className="d-md-none">
                                    <div className="mobile-nav">
                                        <FontAwesomeIcon className="list-icon" icon={faBars} />
                                    </div>
                                </div>

                                <div className="d-none d-md-block">
                                    <SearchBar />
                                    <UserBar />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-auto sidenav d-none d-lg-block">
                            <SideNav />
                        </div>

                        <div className="col">
                            <Component {...matchProps} />
                        </div>
                    </div>
                </div>
            )}/>
        )
    }
};
