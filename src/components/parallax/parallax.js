import React from 'react'
import * as style from "./parallax.module.css"

/**
 * @param {image} image the image to be displayed
 * @param {caption} caption caption to go over the parallax image (can be an 
 * empty string if don't want a caption) (string)
 * @param {caption2} caption2 smaller sub-caption to go over parallax image (string)
 * @param {height} height the desired height in pixels of the parallax image (integer)
 */
const parallax = ({ image, caption, caption2, height }) => {
  return (
    <div className={style.parallaxContainer} style={{ height: `${height}px` }}>
      <div className={style.parallax} style={{ backgroundImage: `url(${image})` }} alt="Parallax image banner" >
        <div className={style.text}>
          <div className={style.caption}>{caption}</div>
          <div className={style.caption2}>{caption2}</div>
        </div>
      </div>
    </div>
  )
}

export default parallax
