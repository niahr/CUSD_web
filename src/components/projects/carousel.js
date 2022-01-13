import React from 'react'
import './bootstrap.css';
import * as iconStyle from "./subteambody.module.css"
import { Carousel } from 'react-bootstrap';


/**
 * @param {images} images list of images to be displayed in the carousel 
 * can also pass in a list of objects, each with properties for the image
 * and caption if you want captions over the carousel. 
 * The code for inserting a carousel caption is commented out below. 
 */
export default function CarouselComp({ images }) {
  return (
    <div className={iconStyle.carouselWrapper}>
      <Carousel>
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <img
              className={iconStyle.imageCarousel}
              src={image}
              alt="Image"
            />
            {/* <Carousel.Caption>
              <h3>{image.caption1}</h3>
              <p>{image.caption2}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div >
  )
}
