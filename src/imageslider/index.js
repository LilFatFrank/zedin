import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ImageSlider = ({images}) => {
    return (
        <Carousel showThumbs={false} showStatus={false} useKeyboardArrows>
          {images.map((img, index) => <div style={{ height: '400px', width: '100%', overflow: 'hidden' }}>
                <img src={img} alt={`${img}-${index}`} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
            </div>)}
        </Carousel>
    )
}

export default ImageSlider;
