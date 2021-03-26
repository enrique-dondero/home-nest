import React from "react";
import Modal from 'react-responsive-modal'
import './style.scss'


class BioModal extends React.Component {    
    state = {
        bio: ""
    }
    onHandleChange = e => {        
        this.setState({bio: e.target.value})
    }
    componentWillMount() {
        const {bio} = this.props
        this.setState({bio})
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
    
         const {showModal, onCloseModal, onSaveBio} = this.props
         const {bio} = this.state
    
        return (
            <Modal open={showModal} onClose={onCloseModal} center styles={bg}>
                <section className="custom-modal bio-info-modal p-4">
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Bio</label>
                        <textarea className="form-control" id="name" name="bio" value={bio} onChange={this.onHandleChange}></textarea>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-dark" onClick={e => onSaveBio(this.state.bio)}>SAVE</button>
                        <button className="btn" onClick={onCloseModal}>Cancel</button>
                    </div>
                </section>            
            </Modal>
        )
    }
    
}

export default  BioModal;