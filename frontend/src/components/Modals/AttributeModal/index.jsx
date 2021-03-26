import React, {Fragment} from "react";
import Modal from 'react-responsive-modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class  AttributeModal extends React.Component {
    state = {
        attributes: []
    }

    componentWillMount() {
        this.setState({attributes: this.props.attributes})
    }

    onHandleChange = (type, index) => e => {
        let {attributes} = this.state
        attributes[index][type] = e.target.value;
        this.setState({attributes: attributes})
    }

    onAddAttr = e => {
        let {attributes} = this.state
        attributes.push({
            key: "",
            value: ""
        })
        this.setState({attributes: attributes})
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
        const {showModal, onCloseModal, onSaveAttribute} = this.props;
        const {attributes} = this.state;
        return (
            <Modal open={showModal} onClose={onCloseModal} center styles={bg}>
                <section className="custom-modal contact-modal p-4">
                    <h2>Attributes</h2>
                    <div className="p-2 d-flex flex-column">
                        <div className="row">
                            <label className="form-label p-1 col-6">Name</label>
                            <label className="form-label p-1 col-6">Properties</label>
                        </div>
                        {attributes.length > 0 && attributes.map((e, i) => {
                            return (
                                <div className="row" key={i}>
                                    <div className="col-6 p-1">
                                        <input type="text" className="form-input" value={e.key} onChange={this.onHandleChange("key", i)} />
                                    </div>
                                    <div className="col-6 p-1">
                                        <input type="text" className="form-input" value={e.value} onChange={this.onHandleChange("value", i)} />
                                    </div>
                                </div>
                            )
                        })}                        
                    </div>
                    <button className="btn text-secondary" onClick={this.onAddAttr}><FontAwesomeIcon icon={faPlus} /> More</button>
                    <div className="modal-footer">
                        <button className="btn btn-dark" onClick={e => onSaveAttribute(this.state.attributes)}>SAVE</button>
                        <button className="btn" onClick={onCloseModal}>Cancel</button>
                    </div>
                </section>
            </Modal>
        )
    }
}

export default AttributeModal;