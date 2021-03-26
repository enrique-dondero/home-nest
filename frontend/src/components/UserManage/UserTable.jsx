import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSort, faEye, faTrash, faPencilAlt, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

export default  function UserTable({userList}) {
    return (
        <div className="user-table">
            <div className="header">
                <div className="user-row">
                    <div className="header-column header-status"/>
                    <div className="header-column font-caption-m header-id">ID <FontAwesomeIcon className="btn-sort" icon={faSort} /></div>
                    <div className="header-column font-caption-m header-name">Name <FontAwesomeIcon className="btn-sort" icon={faSort} /></div>
                    <div className="header-column font-caption-m header-email">Email <FontAwesomeIcon className="btn-sort" icon={faSort} /></div>
                    <div className="header-column header-action"></div>
                </div>
            </div>
            <div className="body">
                {userList.length > 0 && userList.map((e, i) => {
                    return(
                        <div className="user-row" key={e.id}>
                            <div className={`body-col header-status ${e.active && 'active'}`}></div>
                            <div className="body-col font-body-m header-id">{e.id}</div>
                            <div className="body-col font-body-l header-name">{e.name}</div>
                            <div className="body-col header-email">{e.email}</div>
                            <div className="body-col header-action">
                                <FontAwesomeIcon className={`${!e.active && 'eye-slash'}`} icon={e.active ? faEye: faEyeSlash} />
                                <FontAwesomeIcon icon={faPencilAlt} />
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>        
    )
}