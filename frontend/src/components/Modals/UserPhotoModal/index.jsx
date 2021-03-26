import React from "react";
import Modal from 'react-responsive-modal'
import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash } from "@fortawesome/free-solid-svg-icons";
import FileDrop from 'react-file-drop'

class  UserPhotoModal extends React.Component {
    state = {
        file: null,
        filePreview: null
    }
    
    constructor(props) {
        super(props);
        this.previewRef = React.createRef()
    }

    handleDrop = (files, event)  => {
        this.processFiles(files)
    }

    openSelectFile = () => {
		this.previewRef.current.click()
    }

    changeFile = e => {
        if(e.target.files.length === 0)
            return;
        this.processFiles(e.target.files)
    }

    processFiles = files => {
        if (
			files[0].type !== 'image/jpeg' &&
            files[0].type !== 'image/png'
		) {
			
		} else {
			if (
				files[0] &&
				files[0].size / 1024 / 1024 <= 50
			) {
                var reader = new FileReader();
                reader.onload= (e) => {
                    this.setState({filePreview: e.target.result})
                }
                this.setState({file: files[0]});

                reader.readAsDataURL(files[0])
			} 
		}
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
        const {filePreview} = this.state
        const {showModal, onCloseModal} = this.props;
        return (
            <Modal open={showModal} onClose={onCloseModal} center styles={bg}>
                <section className="custom-modal user-photo-modal">
                    <h3>User Photo</h3>
                    <div className="d-flex p-2">
                        <FileDrop onDrop={this.handleDrop}>
                            <div className="drag-panel" onClick={this.openSelectFile}>
                                {filePreview && <img src={filePreview} alt="img" width="100%" height="100%" /> }
                                <div className="desc">
                                    <FontAwesomeIcon icon={faUpload} />
                                    <div>Drop Image Here</div>
                                </div>
                                
                                <input
                                    type="file"
                                    ref={this.previewRef}
                                    onChange={this.changeFile}
                                    accept="image/*"
                                    className="hidden-input"
                                />
                            </div>
                        </FileDrop>
                        <div className="d-flex flex-column justify-content-center align-items-center ml-3">
                            <button className="btn btn-dark">Change</button>
                            <div className="d-flex align-items-center btn-icon btn-remove-photo mt-2">
                                <FontAwesomeIcon className="mr-2" icon={faTrash} />
                                <span>Remove Photo</span>
                            </div>
                        </div>
                    </div>                    
                </section>
            </Modal>
        )
    }
}

export default UserPhotoModal;