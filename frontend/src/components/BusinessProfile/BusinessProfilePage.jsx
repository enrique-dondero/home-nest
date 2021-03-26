import React, {Component, Fragment} from 'react';
import ActionBar from "./../Profile/ActionBar";
import Profile from "./../Profile/Profile";
import {getBusiness} from "../../services/BusinessService";

class BusinessProfilePage extends Component {
    state = {
        business: null
    };

    componentDidMount() {
        const uuid = 'c2a1e91b-a980-11e9-b894-0242ac120003';
        getBusiness(uuid)
            .then(business => this.setState({business}))
    }

    render() {
        const {business} = this.state;

        if (!business) {
            return (<div>Loading...</div>);
        }

        return (
            <Fragment>
                <ActionBar />
                <Profile profile={business} pType={1} />
            </Fragment>
        );
    }
}

export default BusinessProfilePage;
