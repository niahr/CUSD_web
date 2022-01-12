import React from 'react'
import Subteam from "../../components/projects/Subteam"
import currents1 from "../../images/project_photos/currents/currents1.jpg"
import currents2 from "../../images/project_photos/currents/currents2.jpg"
import currents3 from "../../images/project_photos/currents/currents3.jpg"
import currents_header from "../../images/project_photos/currents/currents-header.jpg"

const info = {
  mission: "The Currents team is working on high-efficiency HVAC (heating, ventilation, and air conditioning) sensors using various tracking technologies and machine learning that will be implemented in Upson Hall",
  desc: [
    "Using cutting edge technologies including machine learning, smartphone applications, sensors, and wearables we are designing a system that will accurately predict whether a professor is in their office and turn their heating on/off based on this data. Currents applies computer science and electrical engineering skills to develop a system that offers substantial energy savings."
  ],
  title: "Currents",
  title2: "Defining the next generation of sustainable design",
  parallax1: currents_header,
  parallax2: currents_header,
  images: [currents1, currents2, currents3],
  facts: [
    {
      number: 52,
      numberLabel: '52 MWh/yr',
      metric: 'Energy Savings in MWh/yr',
      color: '#22a84a'
    },
    {
      number: 100,
      numberLabel: '100+',
      metric: 'End Users',
      color: '#12a38d'
    },
    {
      number: 0,
      numberLabel: '0.2%',
      metric: 'Error Rate',
      color: '#02664b'
    }
  ]
}

// 'upson' in previous website
export default function currents() {
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
