import React from 'react'
import * as style from "./parallax.module.css"

const parallax = ({ image, caption, caption2, height }) => {
  return (
    <div className={style.parallaxContainer} style={{ height: `${height}px` }}>
      <div className={style.parallax} style={{ backgroundImage: `url(${image})` }}>
        <div className={style.caption}>{caption}</div>
        <div className={style.caption2}>{caption2}</div>
      </div>
    </div>
  )
}

export default parallax
