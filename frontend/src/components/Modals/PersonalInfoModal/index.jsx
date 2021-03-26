import React from "react";
import Modal from 'react-responsive-modal'
import { Dropdown } from 'semantic-ui-react'
import './style.scss'


export default function PersonalInfoModal({showModal, onCloseModal, onSelected}) {
    const data = [{
        key: '1',
        text: 'one',
        value: 'one'
      },
      {
        key: '2',
          text: 'two',
          value: 'two'
        },
        {
            key: '3',
          text: 'three',
          value: 'three'
        },
        {
            key: '4',
          text: 'four',
          value: 'four'
        },
        {
            key: '5',
          text: 'five',
          value: 'five'
        },
        {
            key: '6',
          text: 'six',
          value: 'six'
        }];
    
    const bg = {
        modal: {
            borderRadius: "10px"
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.8)"
        }
    }
    return (
        <Modal open={showModal} onClose={onCloseModal} center styles={bg}>
            <section className="custom-modal personal-info-modal">
                <h2>Personal Info</h2>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">name & surname</label>
                    <input type="text" className="form-input" id="name" />
                </div>
                <div className="form-group">
                    <label className="form-label">Categories</label>
                    <Dropdown className="category-dropdown" fluid multiple search selection options={data} />
                </div>
                <div className="modal-footer">
                    <button className="btn btn-dark">SAVE</button>
                    <button className="btn"  onClick={onCloseModal}>Cancel</button>
                </div>
            </section>            
        </Modal>
    )
}