import React, {Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faGlobe, faPencilAlt, faPhone, faPlus, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import BioModal from '../Modals/BioModal'
import ContactModal from '../Modals/ContactModal'
import AttributeModal from '../Modals/AttributeModal'
import OfficeModal from '../Modals/OfficeModal'

class  ProfileDetails extends React.Component {
    state = {
        bio: "",
        showBio: false,
        showContact: false,
        showAttribute: false,
        contacts: {
            phone: [
                "+9 888 777 66 53"
            ],
            email: [
                "charlie@no.site"
            ],
            site: [
                "no.site"
            ]
        },
        attributes: [
            {
                key: "WI-FI",
                value: "908378"
            }, {
                key: "Key",
                value: "0dsu98798e3e"
            }
        ],
        office: {
            address: "Googleplex, 1600 Amphitheotre Pkwy, Mountain View, California, U.S.",
            hours:[
                    [],
                    [],
                    [],
                    [],
                    [],
                    [], 
                    []
                ]
        }
    }
    onClickEditBio = e => {
        this.setState({showBio: true})
        e.stopPropagation()
    }

    onCloseBioModal = e => {
        this.setState({showBio: false})
    }

    onSaveBio = bio => {
        this.setState({bio})
        this.onCloseBioModal(null);
    }

    onClickEditContact = e => {
        this.setState({showContact: true})
        e.stopPropagation()
    }

    onCloseContactModal = e => {
        this.setState({showContact: false})
    }

    onSaveContact = contacts => {
        this.setState({contacts})
        this.onCloseContactModal(null)
    }

    onClickEditAttribute = e => {
        this.setState({showAttribute: true})
        e.stopPropagation()
    }

    onCloseAttributeModal = e => {
        this.setState({showAttribute: false})
    }

    onSaveAttribute = attributes => {
        this.setState({attributes})
        this.onCloseAttributeModal(null)
    }

    onClickEditOffice = e => {
        this.setState({showOffice: true})
        e.stopPropagation()
    }

    onCloseOfficeModal = e => {
        this.setState({showOffice: false})
    }

    onSaveOffice = office => {
        this.setState({office})
        this.onCloseOfficeModal(null)
    }

    render () {
        const {
            bio, 
            showBio, 
            contacts, 
            showContact, 
            attributes, 
            showAttribute,
            office,
            showOffice
        } = this.state
        const {pType} = this.props
        return (
            <Fragment>
                <BioModal showModal={showBio} onCloseModal={this.onCloseBioModal} bio={bio} onSaveBio={this.onSaveBio}/>
                {showContact && <ContactModal showModal={showContact} onCloseModal={this.onCloseContactModal} {...contacts} onSaveContact={this.onSaveContact} />}
                {showAttribute && <AttributeModal showModal={showAttribute} onCloseModal={this.onCloseAttributeModal} attributes={attributes} onSaveAttribute={this.onSaveAttribute} />}
                {showOffice && <OfficeModal showModal={showOffice} onCloseModal={this.onCloseOfficeModal} {...office} onSaveOffice={this.onSaveOffice} />}
                <div className="content-box">
                    <div className="section-title">
                        <span className="section-badge">Bio</span>
                        {bio && <FontAwesomeIcon className="btn-icon edit-icon" icon={faPencilAlt} onClick={this.onClickEditBio}/> }
                    </div>
                    <div className="d-flex section-content">
                        {bio}
                        {!bio && <button className="ml-auto btn btn-dark text-white" onClick={this.onClickEditBio}>Fill <FontAwesomeIcon className="edit-icon" icon={faPencilAlt} /></button>  }
                    </div>
                </div>
    
                <div className="content-box">
                    <div className="section-title">
                        <span className="section-badge">Contacts</span>
                        {contacts.length !== 0 && <FontAwesomeIcon className="edit-icon" icon={faPencilAlt}  onClick={this.onClickEditContact} /> }
                    </div>
                    <div className="section-content">
                        <ul className="list d-flex flex-column">
                            {contacts.phone.length > 0 && contacts.phone.map((e, i) => {
                                return(
                                    <li key={`${i}`}>
                                        <FontAwesomeIcon className="list-icon" icon={faPhone} />
                                        {e}
                                    </li>
                                )
                            })}
                            {contacts.email.length > 0 && contacts.email.map((e, i) => {
                                return(
                                    <li key={`${i}`}>
                                        <FontAwesomeIcon className="list-icon" icon={faAt} />
                                        {e}
                                    </li>
                                )
                            })}
                            {contacts.site.length > 0 && contacts.site.map((e, i) => {
                                return(
                                    <li key={`${i}`}>
                                        <FontAwesomeIcon className="list-icon" icon={faGlobe} />
                                        {e}
                                    </li>
                                )
                            })}
                            {contacts.phone.length === 0 && contacts.email.length === 0 && contacts.site.length === 0 && 
                                <button className="ml-auto btn btn-dark text-white" onClick={this.onClickEditContact}>Fill <FontAwesomeIcon className="edit-icon" icon={faPencilAlt} /></button>}
                        </ul>
                    </div>
                </div>

                {pType === 1 && <div className="content-box">
                    <div className="section-title">
                        <span className="section-badge">HQ OFFICE</span>
                        <FontAwesomeIcon className="edit-icon" icon={faPencilAlt} onClick={this.onClickEditOffice} />
                    </div>
                    <div className="section-content">
                        <ul className="list">
                            <li>
                                Googleplex, 1600 Amphitheatre Pkwy, Mountain View, California, U.S.
                            </li>
                            <li className="row">
                                <span className="col-4 col-md-4">MN-5T</span>
                                <span>9:00 <span className="font-weight-bold">AM</span> - 8:00 <span className="font-weight-bold">PM</span></span>
                            </li>
                            <li className="row">
                                <span  className="col-4 col-md-4">SN</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>
                </div> }
    
                <div className="content-box">
                    <div className="section-title">
                        <span className="section-badge">Attributes</span>
                    </div>
                    <div className="section-content attributes-content">
                        {attributes.length > 0 && attributes.map((e, i) => {
                            return (
                                <dl key={e.key + i}>         
                                    <dt>{e.key}</dt>
                                    <dd>{e.value}</dd>
                                    <button className="delete-button">
                                        <FontAwesomeIcon className="list-icon" icon={faTimesCircle} />
                                    </button>
                                </dl>
                            )
                        }) }    
                        <div className="section-actions">
                            <button type="button" className="btn btn-dark" onClick={this.onClickEditAttribute}>
                                Add <FontAwesomeIcon className="list-icon" icon={faPlus} />
                            </button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }    
}


export default ProfileDetails;