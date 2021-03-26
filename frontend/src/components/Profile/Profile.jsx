import React from 'react';

import Comments from "../Comments/Comments";
import Photo from "./Photo";
import ProfileDetails from "./ProfileDetails";
import Photos from "./Photos";
import PrimaryDetails from "./PrimaryDetails";

export default function Profile({ profile, pType }) { // pType :0, user profile, 1: business profile
    return (
        <div>
            <div className="grid-container">
                <div className="col-main">
                    <PrimaryDetails/>

                    <div className="d-md-none">
                        <Photo pType={pType}/>
                    </div>

                    <div className="d-md-none">
                        <ProfileDetails pType={pType}/>
                    </div>

                    <div className="d-xl-none">
                        <Photos wide />
                    </div>

                    <div className="d-none d-xl-block d-xxl-none">
                        <Photos/>
                    </div>

                    <Comments score={profile.score} comments={profile.comments} nbComments={profile.nbComments}/>
                </div>

                <div className="col-side1 d-none d-md-block">
                    <Photo/>
                    <div className="d-xxl-none">
                        <ProfileDetails pType={pType}/>
                    </div>

                    <div className="d-none d-xxl-block">
                        <Photos wide />
                    </div>
                </div>

                <div className="col-side2 d-none d-xxl-block">
                    <ProfileDetails pType={pType}/>
                </div>
            </div>
        </div>
    )
}
