import React, {Fragment} from "react";
import Modal from 'react-responsive-modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from 'react-datepicker'
import './style.scss';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class  OfficeModal extends React.Component {
    state = {
        address: "",
        hours: [
            [], [], [], [], [], [], []
        ]
    }

    componentWillMount() {
        this.setState({address: this.props.address, hours: this.props.hours})
    }

    onHandleChange = (day, idx, typeIdx) => e => {
        let {hours} = this.state
        let value = hours[day][idx]
        value[typeIdx] = e
        this.setState({hours})
    }

    onChangeInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    dayOfWeekAsString = (dayIndex) => {
        return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayIndex];
    }
    
    onClickAddTime = idx => e => {
        let { hours } = this.state
        let value = hours[idx]
        value.push({
            startTime: new Date().setHours(0,0,0,0),
            endTime: new Date().setHours(0,0,0,0)
        })
        this.setState({hours})
    }

    onSaveOffice = e => {
        let office = {
            hours: this.state.hours,
            address: this.state.address
        }
        this.props.onSaveOffice(office)
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
        const {address, hours} = this.state;
        return (
            <Modal open={showModal} onClose={onCloseModal} center styles={bg}>
                <section className="custom-modal office-modal p-4">
                    <h2>HQ Office</h2>
                    <div className="form-group mt-2 mb-2">
                        <label className="form-label">Address</label>
                        <input className="form-input col-12" value={address} onChange={this.onChangeInput} name="address"/>
                    </div>
                    <div className="form-group mt-2 mb-2">
                        <label className="form-label">Open Hours</label>
                        {hours.map((e, i) => {
                            return (
                                <div className="row" key={i}>
                                    <div className="col-3 pt-3">
                                        <label><input type="checkbox" checked={e.length !== 0}/> {this.dayOfWeekAsString(i)}</label>
                                    </div>
                                    <div className="col-9 d-flex flex-wrap align-items-center day-hour">
                                        {e.length > 0 && e.map((f, j) => {
                                            return (
                                                <div className="d-flex align-items-center" key={j}>
                                                    <DatePicker
                                                        className="form-input text-center"
                                                        selected={f.from}
                                                        onChange={this.onHandleChange(i, j, 'from')}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        dateFormat="h:mm aa"
                                                        timeIntervals={15}
                                                    />
                                                    <span className="form-label">-</span>
                                                    <DatePicker
                                                        className="form-input text-center"
                                                        selected={f.to}
                                                        onChange={this.onHandleChange(i, j, 'to')}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        dateFormat="h:mm aa"
                                                        timeIntervals={15}
                                                    />
                                                </div>
                                            )
                                        })}
                                                                    
                                        <div className="btn btn-add m-l-2" onClick={this.onClickAddTime(i)}><FontAwesomeIcon icon={faPlus} /></div>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-dark" onClick={this.onSaveOffice}>SAVE</button>
                        <button className="btn" onClick={onCloseModal}>Cancel</button>
                    </div>
                </section>
            </Modal>
        )
    }
}

export default OfficeModal;