import React from 'react'
import * as iconStyle from "./project.module.css"
import "./projectimages.css"


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

    // Alternate rows 
    if (project.id % 2 === 0) {

      return (

        <div key={project.id} className={`currentProject ${project.name2}pic backgroundstuff1`}>
          <div className={iconStyle.divpicC}>
            <img alt="background pic" src={project.backpic} className={iconStyle.picC} />
          </div>

          <div className={iconStyle.description}>
            <h1 className={iconStyle.title}> {project.name}</h1>
            <h3 className={iconStyle.psubtitle}> {project.subtitle} </h3>
            <div className={iconStyle.buttonContainer}>
              <a className={iconStyle.button} href={project.link}> More about us! </a>
            </div>
          </div>

        </div>
      );
    } else {

      return (
        <div key={project.id} className={`currentProject2 ${project.name2}pic backgroundstuff2`}>
          <div className={iconStyle.description}>
            <h1 className={iconStyle.title}> {project.name}</h1>
            <h3 className={iconStyle.psubtitle}> {project.subtitle} </h3>
            <div className={iconStyle.buttonContainer}>
              <a className={iconStyle.button} href={project.link}> More about us! </a>
            </div>
          </div>

          <div className={iconStyle.divpicC2}>
            <img alt="background pic" src={project.backpic} className={iconStyle.picC2} />
          </div>

        </div>);
    }

  });
  return (
    <div>
      {content}
    </div>
  )
}