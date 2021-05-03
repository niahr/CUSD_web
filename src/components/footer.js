import React from 'react'
//styles
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
// const buttonStyle = {
//  display:block
// }

const Footer = () => {

    return(
      <div class="_footer-cta">
      <article class="footer-cta__cta">
        <h2 class="footer-cta__cta__title">Partner</h2>
        <p class="footer-cta__cta__description">Partner with us to help make a project reality</p>
        <p class="footer-cta__cta__description__mobile">Make your project a reality</p>
        <a href="mailto:cu.sustainabledesign@gmail.com?subject=Partnership with CUSD" class="button footer-cta__cta__button">Contact</a>
      </article>

      <article class="footer-cta__cta">
        <h2 class="footer-cta__cta__title">Donate</h2>
        <p class="footer-cta__cta__description">Support our work and enable project impact</p>
        <p class="footer-cta__cta__description__mobile">Directly support our work</p>
        <a href="https://securelb.imodules.com/s/1717/alumni/index.aspx?sid=1717&gid=2&pgid=403&cid=1031&dids=142&bledit=1" target="_blank" class="button footer-cta__cta__button">Donate</a>
      </article>

      <article class="footer-cta__cta">
        <h2 class="footer-cta__cta__title">Join</h2>
        <p class="footer-cta__cta__description">Interested in making an impact?</p>
        <p class="footer-cta__cta__description__mobile">Want to make an impact?</p>
        <a href="https://forms.gle/579KKnNaMxSznxRa9" target="_blank" class="button footer-cta__cta__button">Apply</a>
      </article>
  </div>
        )
}

export default Footer