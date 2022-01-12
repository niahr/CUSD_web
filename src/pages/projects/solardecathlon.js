import React from 'react'
import Subteam from "../../components/projects/Subteam"
import sd1 from "../../images/project_photos/solardecathlon/sd1.gif"
import sd2 from "../../images/project_photos/solardecathlon/sd2.jpg"
import sd3 from "../../images/project_photos/solardecathlon/sd3.jpg"
import sd_header from "../../images/project_photos/solardecathlon/sd-header.jpg"

const info = {
  mission: "The Solar Decathalon was the origin story for CUSD. We participated in the Solar Decathlon 3 times. We started with a sustainable house design, then moved onto the Cornell House featuring our 'Light Canopy' and finished our final Solar Decathon project with the Silo House.",
  desc: [
    "The CUSD plan for the sustainable house design was unique as it combined architectural elements to allow daylight to fill the house despite the time of day. For night time, the team used compact fluorescent bulbs wiht an energy consumption of 15 to 30 watts throughout the house. The different perspectives that came into building our first project sowed the first seeds for potentially doing a larger quantity and wider range of projects.",
    "A unique feature of the Cornell house is the 'Light Canopy,' a streamlined framework of steel trusses that support a PV system, evacuated tubes for water and space heating, and vegetated latticework panels called 'greenscreens' that provide shade in summer. Honoring their commitment to raise public awareness, the team members worked with Ithaca city schools to introduce students to solar energy and energy efficiency.",
    "The Silo House, built in 2009 for the biennial Solar Decathlon Competiton in Washington, D.C., was Cornell University's third and final entry to the Solar Decathlon Competition. The Silo House is a modular structure with three interconnecting cylindrical rooms. The circular shapes of the house reflect the silos that dot the rolling hills of upstate New York, which served as the primary design inspiration for the team. The final design is 'post-agrarian,' a reminder of a future without farms."
  ],
  title: "Solar Decathalon",
  title2: "The inspiration for CUSD",
  parallax1: sd_header,
  parallax2: sd_header,
  images: [sd1, sd2, sd3],
  facts: [
    {
      number: 3,
      numberLabel: '3',
      metric: 'Entries into the National Solar Decathlon Competition',
      color: '#22a84a'
    }
  ]
}

export default function sd() {
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

