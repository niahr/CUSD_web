import React from 'react'
import tweet from '../images/icons/twitter.png'

function ConnectFooter(props) {
  return (
    <div className="about-container">
      <p>Connect With Us</p>
      
      <a href="https://twitter.com/CUSD" class="fa fa-twitter">
      <img
        alt="twitter"
        src = "src/images/icons/twitter.png"
      />
      </a>

      <a href="https://www.facebook.com/CUSustainableDesign/?fref=ts" class="fa fa-facebook">
      <img
        alt="facebook"
        src = "src/images/icons/twitter.png"
      />
      </a>

      <a href="https://www.linkedin.com/company/cornellusd" class="fa fa-linkedin">
      <img
        alt="linkedin"
        src = "src/images/icons/linkedin.png"
      />
      </a>

      <a href="https://www.instagram.com/cusustainabledesign/?hl=en" class="fa fa-instagram">
      <img
        alt="instagram"
        src = "src/images/icons/instagram.png"
      />
      </a>
    </div>
  )
}
export default ConnectFooter