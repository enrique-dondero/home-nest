import React from 'react';
import PhotoGalleryPhoto from "./PhotoGalleryPhoto";

export default function PhotoGallery({ urls }) {

    return (
        <div className="photo-gallery">
            <div className="row">
                <div className="col-12 col-sm-4 col-xxl-12 no-padding">
                    <PhotoGalleryPhoto src={urls[0]} />
                </div>
                <div className="col-12 col-sm-8 col-xxl-12  justify-content-center">
                    <div className="d-none d-md-block d-xxl-none">
                        <div className="row">
                            {urls.map((e, i) => {
                                if( i > 0 && i < 9) {
                                    return (
                                        <div className="col-4 col-sm-4 col-md-3 col-xxl-4 no-padding" key={e + i}>
                                            <PhotoGalleryPhoto src={urls[i]} darkened={i === 8} caption={i === 8 && "+37"}/>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>

                    <div className="d-block d-md-none d-xxl-block">
                        <div className="row">
                            {urls.map((e, i) => {
                                if( i > 0 && i < 10) {
                                    return (
                                        <div className="col-4 col-sm-4 col-md-3 col-xxl-4 no-padding" key={e + i}>
                                            <PhotoGalleryPhoto src={urls[i]} darkened={i === 9} caption={i === 9 && "+36"}/>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
