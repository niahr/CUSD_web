import React from "react";
import * as iconStyle from "./project.module.css";
import "./projectimages.css";

/**
 * @param {projects} projects a list of project objects.
 *
 * Each project object should have a 'link', 'id', 'name', 'subtitle',
 * and 'pic' prop.
 *
 * 'link' is for routing to the subteam page
 * 'id' is a number identifying the subteam
 * 'name' is the name of the subteam
 * 'subtitle' is the description or expanded name of the subteam that will
 * go over the subteam logos as an overlay
 * 'backpic' is the background image for the team
 */

export default function CurrentProject({ projects }) {
  const content = projects.map((project) => {
    return (
      <div
        key={project.id}
        //alternates the color scheme
        className={`projectwrapper background${project.id % 2}`}
      >
        <div className={iconStyle.description}>
          <div className={`${project.name2}pic leftcontent`}>
            <div className={iconStyle.textwrapper}>
              <h1 className={iconStyle.title}> {project.name}</h1>
              <h3 className={iconStyle.psubtitle}> {project.subtitle} </h3>
              <div className={iconStyle.buttonContainer}>
                <a className={iconStyle.button} href={project.link}>
                  More about us!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={iconStyle.rightpicwrapper}>
          <img
            alt="background pic"
            src={project.backpic}
            className={iconStyle.pic}
          />
        </div>
      </div>
    );
  });
  return <div>{content}</div>;
}
