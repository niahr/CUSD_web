import React from 'react'
import "./timeline.css"

export default function bai({ children }) {
  return <div className="timelinerow">{children}
    <h1 className="timelinelabel"> The Application Process </h1>
    <div className="timeline">
      <div className="timelinepoint">
        <span className="year">DATE HERE</span>
        <ul className="projects">
          <li className="label">Application Opens </li>
        </ul>
      </div>
      <div className="timelinepoint">
        <span className="year">DATE HERE</span >
        <ul className="projects">
          <li className="label"> Application Closes</li >
        </ul >
      </div >
      <div className="timelinepoint">
        <span className="year">DATE HERE</span>
        <ul className="projects">
          <li className="label"> Interviews</li >
        </ul >
      </div >
      <div className="timelinepoint">
        <span className="year">DATE HERE</span>
        <ul className="projects">
          <li className="label"> Results </li >
        </ul >
      </div >
    </div >
  </div >
}