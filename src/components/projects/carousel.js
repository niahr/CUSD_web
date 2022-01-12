import React from 'react'
import './bootstrap.css';
import * as iconStyle from "./subteambody.module.css"
import { Carousel } from 'react-bootstrap';

export default function CarouselComp({ images }) {
  return (
    <div className={iconStyle.carouselWrapper}>
      <Carousel>
        {images.map((image, i) => (
          <Carousel.Item>
            <img
              className={iconStyle.imageCarousel}
              src={image.image}
              alt="Image"
            />
            <Carousel.Caption>
              <h3>{image.caption1}</h3>
              <p>{image.caption2}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div >
  )
}
