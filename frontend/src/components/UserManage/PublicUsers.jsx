import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PublicUserTable from './PublicUserTable';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function PublicUsers() {
    const publicUsers = [{
        active: true,
        id: "PERS0001",
        name: "Alex Van De Berg",
        email: "charlie@no.site"
    },{
        active: false,
        id: "PERS0002",
        name: "Alex Kronsberger",
        email: "matthewkronsberger@no.site"
    },{
        active: false,
        id: "PERS0003",
        name: "Alex Anderson",
        email: "aanderson@no.site"
    },{
        active: true,
        id: "PERS0004",
        name: "Alex Van De Berg",
        email: "charlie@no.site"
    },{
        active: true,
        id: "PERS0005",
        name: "Alex Van De Berg",
        email: "charlie@no.site"
    }]
    return (
        <section className="public-user">
            <div className="title-bar">
                <span className="font-title">Public Users</span>
                <button type="button" className="btn btn-primary">
                    Create User <FontAwesomeIcon className="list-icon" icon={faPlus} />
                </button>
            </div>
            <div className="user-list">
                <PublicUserTable userList={publicUsers} />      
            </div>
        </section>
    )
}
