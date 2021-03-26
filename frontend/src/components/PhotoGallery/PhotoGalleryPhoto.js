import React from 'react';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function PhotoGalleryPhoto({ src, darkened, caption, preview, checkbox }) {
    let wrapClasses = 'photo-wrap';
    if (darkened) {
        wrapClasses += ' darkened';
    }

    const canDelete = !darkened && !checkbox && !preview;

    return (
        <div className={wrapClasses}>
            <div className="photo" style={{background: 'url("' + src +'") no-repeat center /cover'}} />
            {caption && <div className="photo-caption">{caption}</div>}

            {canDelete &&
                <button className="btn-flat action-icon">
                    <FontAwesomeIcon className="list-icon" icon={faTrashAlt}/>
                </button>
            }

            {checkbox &&
                <label className="action-check"><input type="checkbox"/></label>
            }
        </div>
    );
}
