import React from "react";
import "./content.css";

const Content = ({ welcome }) => {
  return (
    <div className="join-container">
      <div className="joinwhy">
        <div className="jointext">
          <h2 id="joinTitle"> Why Should You Join CUSD?</h2>
          <h5 className="joinSubtext">
            Interested in joining a team of like-minded individuals, driven to
            build more sustainable communities worldwide? Looking to be
            challenged and collaborate with students from every college to
            construct interdisciplinary solutions to the modern days' most
            consequential sustainable issues? CUSD is looking for people like
            you!
          </h5>
        </div>
        <div className="welcomewrapper">
          <img src={welcome} alt="welcome image" className="welcomeimg" />
        </div>
      </div>

      <div className="applycontainer">
        <h2 id="joinTitle">Before Applying:</h2>

        <ul>
          <h5 className="joinapplytext">
            <li>
              Take a look at our current project teams&nbsp;
              <a href="../projects">here</a> and determine which project areas
              interest you.
            </li>
            <li>
              Take a look&nbsp;<a href="#info-title">below</a> at what a typical
              CUSD semester looks like
            </li>
            <li>Click the button below and apply to those teams!</li>
          </h5>
        </ul>
      </div>

      <div class="join-button-container">
        <div className="joinButton">
          <a
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSde1gix0npGShmcuuTwRyhxN20NTyP__oKlIGvDJJBl4rBSLw/viewform?usp=sf_link"
            target="_blank"
            className="joinButtonInner"
          >
            Apply Here!
          </a>
        </div>
      </div>
    </div>
  );
};
export default Content;
