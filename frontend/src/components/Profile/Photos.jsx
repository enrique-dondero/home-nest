import React, {Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import PhotoModal from '../Modals/PhotoModal';

class Photos extends React.Component {

    state = {
        showUpload: false,
    }

    onClickUpload = e => {
        this.setState({showUpload: true})
    }

    onCloseModal = e => {
        this.setState({showUpload: false})
    }

    render() {
        const {showUpload} = this.state
        const urls = [
            'https://www.icsydney.com.au/sites/default/files/styles/blog_detail_image/public/Blog_Blogimage_SydneyOpera.jpg?itok=ClyPJIa0',
            'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/132472/pexels-photo-132472.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/35598/peacock-bird-colorful-blue.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/1477430/pexels-photo-1477430.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/355296/pexels-photo-355296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/355296/pexels-photo-355296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            
        ];
        return (
            <div className="content-box">
                <PhotoModal showModal={showUpload} onCloseModal={this.onCloseModal} urls={urls} selIdx={0}/>
                <div className="section-badge">Photos</div>
                {urls.length > 0 ? <Fragment>
                        <PhotoGallery urls={urls}/>
                        <div className="text-right">
                            <button type="button" className="btn btn-primary btn-upload btn-dark" onClick={this.onClickUpload}>
                                Upload New Photo <FontAwesomeIcon className="list-icon" icon={faUpload} />
                            </button>
                        </div>
                    </Fragment>
                    :   <div className="photo-upload d-flex justify-content-center align-items-center">
                            <button type="button" className="btn btn-primary" onClick={this.onClickUpload}>
                                Upload New Photo <FontAwesomeIcon className="list-icon" icon={faUpload} />
                            </button>
                </div> }
            </div>
        );
    }
    
}

export default Photos;