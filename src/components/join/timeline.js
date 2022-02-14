import React from 'react'
import "./content.css"

const TimeLine = () => {

  return (
    <div className="whole-container">

      <div className="app-title"> <h1> The Application Process </h1> </div>

      <div className="timeline-container">

        <div className="timeline-entry">
          <div className="timeline-title">Application opens:</div>
          <div className="timeline-date">DATE HERE </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-title">Application closes:</div>
          <div className="timeline-date">DATE HERE </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-title">Interviews:</div>
          <div className="timeline-date">DATE HERE </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-title">Results:</div>
          <div className="timeline-date">DATE HERE </div>
        </div>



      </div>

    </div>
  )
}
export default TimeLine