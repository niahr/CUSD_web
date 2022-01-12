import React from 'react'
import * as iconStyle from "./project.module.css"

export default function Project({ projects }) {
    const content = projects.map((project) =>
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
    );
    return (
        <div className={iconStyle.projectsWrapper}>
            {content}
        </div>
    )
}