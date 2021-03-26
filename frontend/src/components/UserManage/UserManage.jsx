import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import UserTable from './UserTable';

export default function UserManage() {
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

    const adminUsers = [{
        active: true,
        id: "PERS0001",
        name: "Alex Van De Berg",
        email: "charlie@no.site"
    }]
    return (
        <section className="user-management">
            <div className="user-section">
                <div className="font-body-l section-label">Public Users (12)</div>
                <UserTable userList={publicUsers} />
                <div className="show-all btn-right-icon">
                    <span className="name font-caption-m">Show All in Public Users</span>
                    <FontAwesomeIcon className="icon" icon={faAngleDown} />
                </div>
            </div>
            <div className="user-section">
                <div className="font-body-l section-label">Admin Users (1)</div>
                <UserTable userList={adminUsers} />
            </div>
        </section>
    )
}
