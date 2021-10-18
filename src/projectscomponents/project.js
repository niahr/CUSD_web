import React from 'react'

export default function projectList({ projects }) {
    const content = projects.map((project) =>
        <div key={project.id}>
        <h3>{project.name}</h3>
        <p>{project.subtitle}</p>
        </div>
    );
    return (
        <div>
            {content}
        </div>
    )
}