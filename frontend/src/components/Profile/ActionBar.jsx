import React, { useState } from 'react';
import ActionsDropdown from "./ActionsDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import Status from "./Status";

export default function ActionBar() {
    const [open, setOpen] = useState(0);

    return (
        <div className="row">
            <div className="col">
                <div className="status-box">
                    <div className="actions-group">
                        <ActionsDropdown open={open} handleClicked={() => setOpen(true)} />
                    </div>

                    <div className="d-none d-md-block">
                        <Status />
                    </div>
                </div>

                <div className="d-md-none">
                    <Status />
                </div>
            </div>
        </div>
    );
}
