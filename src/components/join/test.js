import React from 'react'

import "./test.css"

export default function bai({ children }) {
  return <div className="timelinerow">{children}
    <h1 className="timelinelabel"> The Application Process </h1>
    <div className="timeline">
      <div className="timelinepoint">
        <span className="year">DATE HERE</span>
        <ul className="projects">
          <li>Application Opens </li>
        </ul>
      </div>
      <div className="timelinepoint">
        <span className="year">DATE HERE</span >
        <ul className="projects">
          <li><a href="/projects / ord" className="label"> Application Closes </a ></li >
        </ul >
      </div >
      <div className="timelinepoint">
        <span className="year">DATE HERE</span>
        <ul className="projects">
          <li><a href="/projects / seg" className="label"> Interviews </a ></li >
        </ul >
      </div >
      <div className="timelinepoint">
        <span className="year">DATE HERE</span>
        <ul className="projects">
          <li><a href="/projects / seg" className="label"> Results </a ></li >
        </ul >
      </div >
    </div >
  </div >
}