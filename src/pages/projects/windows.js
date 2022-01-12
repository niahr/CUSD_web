import React from 'react'
import Subteam from "../../components/projects/Subteam"
import windows1 from "../../images/project_photos/windows/windows1.jpg"
import windows2 from "../../images/project_photos/windows/windows2.jpg"
import windows3 from "../../images/project_photos/windows/windows3.jpg"
import windows_header from "../../images/project_photos/windows/windows-header.jpg"

const info = {
  mission: "Project Olin aims to assess the feasibility of implementing energy-saving window technologies in Olin Hall, the home of the Chemical Engineering department on Cornell's campus.",
  desc: [
    "We are working to accomplish this by creating an energy model of Olin Hall on DesignBuilder, an energy-modeling software. We will then manipulate the model to see how different technologies or modifications, such as window treatments, affect the building's energy consumption.",
    "Started in Fall 2015, the project involves several key stages. The first of these is gathering measurements and HVAC (heating, ventilation, and cooling) information for Olin Hall to use in creating the model. Next, we will create the model using this information. We will then move on to our third stage: manipulating the model to determine how changes in window technology will affect energy use. Finally, based on these findings, we will make a recommendation for Olin's windows, based on energy savings, cost, and other important factors.",
    "Currently, we are in the second stage of this process: creating the model. We plan to complete the fourth stage by April 2015."
  ],
  title: "Windows",
  title2: "Studying the feasibility and cost of thermosensitive technologies",
  parallax1: windows_header,
  parallax2: windows_header,
  images: [windows1, windows2, windows3],
  facts: [
    {
      number: 200,
      numberLabel: '200',
      metric: 'Windows in Olin Hall',
      color: '#22a84a'
    },
    {
      number: 5,
      numberLabel: '5',
      metric: 'Years Involved',
      color: '#12a38d'
    },
    {
      number: 108,
      numberLabel: '108,452',
      metric: 'Net Area of Building (Sq. Ft.)',
      color: '#02664b'
    }
  ]
}

export default function windows() {
  return (
    <div>
      <Subteam
        parallax1={info.parallax1}
        title={info.title}
        title2={info.title2}
        mission={info.mission}
        desc={info.desc}
        images={info.images}
        parallax2={info.parallax2}
        facts={info.facts}
      />
    </div>
  )
}

