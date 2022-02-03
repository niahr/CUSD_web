import React from 'react'
import "./footer.scss"
//styles

const Footer = () => {

  return (
    <div className="footer_container">
      <article>
        <h2 >Partner</h2>
        <p>Partner with us to help make a project reality</p>
        <a href="mailto:cu.sustainabledesign@gmail.com?subject=Partnership with CUSD" target="_blank" rel="noreferrer">
          <button>Partner </button> </a>
      </article>

      <article>
        <h2>Donate</h2>
        <p>Support our work and enable project impact</p>
        <a href="https://securelb.imodules.com/s/1717/alumni/index.aspx?sid=1717&gid=2&pgid=403&cid=1031&dids=142&bledit=1" target="_blank" rel="noreferrer">
          <button>Donate</button></a>
      </article>

      <article>
        <h2>Join</h2>
        <p >Interested in making an impact?</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSde1gix0npGShmcuuTwRyhxN20NTyP__oKlIGvDJJBl4rBSLw/viewform?usp=sf_link" target="_blank" rel="noreferrer">
          <button>Apply</button></a>
      </article>
    </div>
  )
}

export default Footer