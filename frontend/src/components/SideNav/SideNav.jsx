import React, {Fragment} from 'react';
import {faChartPie, faUser, faCogs, faThLarge, faToolbox} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default function () {
    return (
        <Fragment>
            <ul className="ul-primary">
                <li>
                    <Link to="/dashboard"><FontAwesomeIcon className="list-icon" icon={faThLarge} /> Dashboard</Link>
                </li>
                <li className="active"><Link to="/coming-soon"><FontAwesomeIcon className="list-icon" icon={faUser} /> Main</Link></li>
            </ul>

            <ul className="ul-secondary">
                <li><Link to="/business"><span>Businesses</span></Link></li>
                <li className="active"><Link to="/profile"><span>Profiles</span></Link></li>
            </ul>

            <ul className="ul-primary">
                <li><Link to="/coming-soon"><FontAwesomeIcon className="list-icon" icon={faCogs} /> Configuration</Link></li>
                <li><Link to="/coming-soon"><FontAwesomeIcon className="list-icon" icon={faChartPie} /> Reports</Link></li>
                <li><Link to="/coming-soon"><FontAwesomeIcon className="list-icon" icon={faToolbox} />  Admin</Link></li>
            </ul>
        </Fragment>
    );
}
