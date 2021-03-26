import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import UserPhotoModal from '../Modals/UserPhotoModal'

class Photo extends React.Component {
    state = {
        showModal: false
    }

    onClickUpload = e => {
        this.setState({showModal: true})
    }

    onCloseModal = e => {
        this.setState({showModal: false})
    }


    render() {
        const {showModal} = this.state
        const {pType} = this.props
        return (
            <div className="photo-box">
                <div className="photo-tag">
                    {pType === 0 ? <span>Personal</span>
                        :<span>Business</span>
                    }
                </div>
                <button className="edit-button"><FontAwesomeIcon className="edit-icon" icon={faPencilAlt}  onClick={this.onClickUpload}/></button>
                <img className="profile-photo" src="/img/girl.jpeg" alt="Profile Photo"/>
                {showModal && <UserPhotoModal showModal={showModal} onCloseModal={this.onCloseModal}/>}
            </div>
        );
    }
}

export default Photo;