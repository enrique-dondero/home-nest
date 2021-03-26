import React from 'react';
import TimeAgo from "react-timeago/lib/index";

export default function Comment({name, avatar, score, timestamp, children}) {
    return (
        <div className="comment">

            <div className="comment-heading">
                <div className="comment-heading-author">
                    <img className="comment-author-avatar" src={avatar} />
                    <div className={score > 50 ? "comment-author-num" : "comment-author-num num-low"}>{score}</div>
                    <div className="comment-author-name">{name}</div>
                </div>
                <div className="comment-side">
                    <TimeAgo date={timestamp} live={false} />
                </div>
            </div>

            {children}
        </div>
    );
}

