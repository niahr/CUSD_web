import React from "react";
import * as iconStyle from "./project.module.css";

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
 */
export default function Project({ projects }) {
  const content = projects.map((project) => (
    <div key={project.id} className={iconStyle.projects}>
      <div className={iconStyle.project}>
        <a href={project.link}>
          <div className={iconStyle.image}>
            <img alt="logo" src={project.pic} className={iconStyle.logos} />
            <div className={iconStyle.image__overlay}>
              <p className={iconStyle.subtitle}>{project.subtitle}</p>
            </div>
          </div>
        </a>

        <div className={iconStyle.text}>
          <h3 className={iconStyle.name}>{project.name}</h3>
          <p className={iconStyle.subtitleSmall}>{project.subtitle}</p>
        </div>
      </div>
    </div>
  ));
  return <div className={iconStyle.projectsWrapper}>{content}</div>;
}
