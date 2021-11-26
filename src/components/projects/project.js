import React from 'react'
import * as iconStyle from "./project.module.css"

export default function projectList({ projects }) {
    const content = projects.map((project) =>
        <div key={project.id} className={iconStyle.projects}>
            <div className={iconStyle.project}>
                <div className={iconStyle.image}>
                    <img src={project.pic} className={iconStyle.logos}/>
                    <div className={iconStyle.image__overlay}>
                        <p className={iconStyle.subtitle}>{project.subtitle}</p>
                    </div>
                </div>
                <div className={iconStyle.text}>
                    <h3 className={iconStyle.name}>{project.name}</h3>
                </div>
            </div>
        </div>
    );
    return (
        <div>
            {content}
        </div>
    )
}