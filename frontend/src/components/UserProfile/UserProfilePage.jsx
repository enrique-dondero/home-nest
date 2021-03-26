import React, {Component, Fragment} from 'react';
import ActionBar from "../Profile/ActionBar";
import Profile from "../Profile/Profile";

class UserProfilePage extends Component {
    state = {
        user: null
    };

    render() {
        // const {user} = this.state;
        //
        // if (!user) {
        //     return false;
        // }

        return (
            <Fragment>
                <ActionBar />
                <Profile />
            </Fragment>
        );
    }
}

export default UserProfilePage;
