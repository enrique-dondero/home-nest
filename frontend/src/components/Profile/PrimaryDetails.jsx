import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import PersonalInfoModal from '../Modals/PersonalInfoModal'


class PrimaryDetails extends React.Component {
    state = {
        showModal: false
    }

    onClickEdit = e => {
        this.setState({showModal: true})
        e.stopPropagation()
    }

    onCloseModal = e => {
        this.setState({showModal: false})
    }

    onSelected = p => {
        console.log(p)
    }

    render() {
        const {showModal} = this.state
        return (
            <div className="content-box d-flex flex-column">
                <FontAwesomeIcon className="icon-btn ml-auto d-none d-md-block" icon={faPencilAlt} onClick={this.onClickEdit}/>
                <h2>Charlotte Van De Berg</h2>
                <div>Book Editor, Literature</div>            
                <FontAwesomeIcon className="icon-btn ml-auto d-md-none" icon={faPencilAlt} onClick={this.onClickEdit}/>
                <PersonalInfoModal showModal={showModal} onCloseModal={this.onCloseModal} onSelected={this.onSelected}/>
            </div>
        );
    }
}


export default PrimaryDetails;