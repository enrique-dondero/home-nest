import React, {Fragment} from "react";
import Modal from 'react-responsive-modal'
import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class  ContactModal extends React.Component {
    state = {
        phone: [],
        email: [],
        site: []
    }

    componentWillMount() {
        this.setState({phone: this.props.phone, email: this.props.email, site: this.props.site})
    }

    onHandleChange = (type, index) => e => {
        let value = this.state[type]
        value[index] = e.target.value
        this.setState({[type]: value})
    }

    onAddContact = type => e => {
        let value = this.state[type]
        value.push("")
        this.setState({[type]: value})
    }

    onSaveContact = e => {
        let {phone, email, site} = this.state;
        phone = phone.filter(String)
        email = email.filter(String)
        site = site.filter(String)
        const contacts = {
            phone: phone,
            email: email,
            site: site
        }
        this.props.onSaveContact(contacts);
    }

    render() {
        const bg = {
            modal: {
                borderRadius: "10px"
            },
            overlay: {
                background: "rgba(255, 255, 255, 0.8)"
            }
        }
        const {showModal, onCloseModal} = this.props;
        const {phone, email, site} = this.state;
        return (
            <Modal open={showModal} onClose={onCloseModal} center styles={bg}>
                <section className="custom-modal contact-modal p-4">
                    <h2>Contacts</h2>
                    <div className="p-2 d-flex flex-column">
                        <label className="form-label p-1">Phone</label>
                        <div className="d-flex flex-wrap">
                            {phone.length > 0 && phone.map((e, i) => {
                                return (
                                    <Fragment key={i}>
                                        <input type="text" className="form-input m-1" value={e} onChange={this.onHandleChange("phone", i)} />
                                    </Fragment>
                                )
                            })}
                            <button className="btn text-secondary" onClick={this.onAddContact("phone")}><FontAwesomeIcon icon={faPlus} /> More</button>
                        </div>
                    </div>

                    <div className="p-2 d-flex flex-column">
                        <label className="form-label p-1">Email</label>
                        <div className="d-flex flex-wrap">
                            {email.length > 0 && email.map((e, i) => {
                                return (
                                    <Fragment key={i}>
                                        <input type="text" className="form-input m-1" value={e} onChange={this.onHandleChange("email", i)} />
                                    </Fragment>
                                )
                            })}
                            <button className="btn text-secondary" onClick={this.onAddContact("email")}><FontAwesomeIcon icon={faPlus} /> More</button>
                        </div>
                    </div>

                    <div className="p-2 d-flex flex-column">
                        <label className="form-label p-1">Site</label>
                        <div className="d-flex flex-wrap">
                            {site.length > 0 && site.map((e, i) => {
                                return (
                                    <Fragment key={i}>
                                        <input type="text" className="form-input m-1" value={e} onChange={this.onHandleChange("site", i)} />
                                    </Fragment>
                                )
                            })}
                            <button className="btn text-secondary" onClick={this.onAddContact("site")}><FontAwesomeIcon icon={faPlus} /> More</button>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-dark" onClick={this.onSaveContact}>SAVE</button>
                        <button className="btn" onClick={onCloseModal}>Cancel</button>
                    </div>
                </section>
            </Modal>
        )
    }
}

export default ContactModal;