import React, {Fragment} from 'react';
import SideNav from "../SideNav/SideNav";
import ActionBar from "./ActionBar";
import Profile from "./Profile";

export default function ProfilePage() {
    return (
        <Fragment>
            <ActionBar />
            <Profile />
        </Fragment>
    );
}
