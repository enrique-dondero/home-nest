import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSort, faEye, faTrash, faPencilAlt, faEyeSlash, faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import SearchBar from '../SearchBar/SearchBar';
import ReactPaginate from 'react-paginate';


export default  function PublicUserTable({userList}) {
    return (
        <div className="public-user-table">
            <div className="table-top">
                <SearchBar />
                <div className="filter">
                    <div className="not-verified">
                        <label className="no-bot"><input type="checkbox" /> Show only not verified</label>
                    </div>
                    <div className="more-filter">
                        Show more filters
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="user-row">
                    <div className="header-column header-check">
                        <label className="no-bot"><input type="checkbox" /></label>
                    </div>
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
                            <div className="header-check">
                                <label className="no-bot"><input type="checkbox" /></label>
                            </div>
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

            <div className="pagination-wrapper">
                <ReactPaginate
                    previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
                    nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={26}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={4}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>        
    )
}