import React, {useState} from 'react'
import Modal from 'react-responsive-modal'
import PhotoGalleryPhoto from '../../PhotoGallery/PhotoGalleryPhoto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './style.scss'

export default function PhotoModal({showModal, onCloseModal, urls}) {
    const bg = {
        modal: {
            borderRadius: "10px",
            width: "100%",
            padding: "0px"
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.8)"
        }
    }

    const [selIdx, setIndex] = useState(0);

    const changeSelection = i => e => setIndex(i);

    return (
        <Modal classNames={{modal: 'photo-upload-modal'}} open={showModal} onClose={onCloseModal} center styles={bg}>
            <div className="action-bar row">
                <div className="col-8">
                    <div className="text-white"><FontAwesomeIcon icon={faArrowLeft} /> Charlatte Van De Berg</div>
                </div>
                <div className="col-4 d-flex justify-content-between">
                    <label  className="text-white align-items-center d-flex"><input className="mr-1" type="checkbox"/> Check All</label>
                    <span className="text-secondary"><FontAwesomeIcon icon={faTrash} /> Remove</span>
                </div>
            </div>
            <section className="custom-modal photo-upload-modal p-4">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <PhotoGalleryPhoto src={urls[selIdx]} preview />
                        <div className="d-flex justify-content-between text-secondary pt-4">
                            <span>Uploaded jul 22, 2019 at 9:44 PM</span>
                            <span><FontAwesomeIcon icon={faTrash} /> Remove Photo</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row">
                            {urls.map((e, i) => {
                                return (
                                    <div className="col-4 col-md-4 no-padding" key={e + i} onClick={changeSelection(i)}>
                                        <PhotoGalleryPhoto src={urls[i]} checkbox/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </Modal>
    )
}