import React from 'react'
import * as iconStyle from "./project.module.css"

export default function projectList({ projects }) {
    const content = projects.map((project) =>
        <div key={project.id} className={iconStyle.projects}>
            <div className={iconStyle.project}>
                <img src={project.pic} className={iconStyle.logos}/>
                <div className={iconStyle.text}>
                    <h3 className={iconStyle.name}>{project.name}</h3>
                    <p className={iconStyle.subtitle}>{project.subtitle}</p>
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