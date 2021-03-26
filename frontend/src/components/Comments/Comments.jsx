import React from 'react';
import Comment from "./Comment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faArrowLeft, faArrowRight, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import CommentsProgress from "./CommentsProgress";
import ReactPaginate from 'react-paginate';

export default function Comments({ score, comments, nbComments }) {

    return (
        <div className="content-box">
            <div className="section-badge">Comments</div>
            <div className="section-note">{nbComments}</div>

            <div>
                <div className="comments-header">
                    <div className="d-flex">
                    <div className="flex-fill">
                        <div className="comments-filters">
                            <div className="comment-filter">
                                <label><input type="checkbox" /> Only With Images</label>
                            </div>

                            <div className="comment-filter">
                                <label><input type="checkbox" /> Only Low Scores</label>
                            </div>

                            <div className="comment-filter">
                                Most Recent
                                <button className="btn-flat"><FontAwesomeIcon icon={faAngleDown} /></button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <CommentsProgress progress={score} />
                    </div>
                </div>
                </div>

                <div>
                    {comments && comments.map(({comment, score, createdAt}, index) =>
                        <Comment name="Anonymous" score={score} avatar="/img/avatars/1.jpeg" key={'comment-' + index} timestamp={createdAt}>
                            {comment}
                        </Comment>
                    )}
                </div>

                {nbComments <= 20 ||
                    <div className="pagination-wrapper">
                        <ReactPaginate
                            previousLabel={<FontAwesomeIcon icon={faArrowLeft}/>}
                            nextLabel={<FontAwesomeIcon icon={faArrowRight}/>}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={26}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={1}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                }
            </div>
        </div>
    );
}

