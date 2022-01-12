import React from 'react'
import Subteam from "../../components/projects/Subteam"
import sst1 from "../../images/project_photos/sst/sst1.jpg"
import sst2 from "../../images/project_photos/sst/sst2.png"
import sst3 from "../../images/project_photos/sst/sst3.jpg"
import sst4 from "../../images/project_photos/sst/sst4.jpg"

const info = {
  mission: "Partner with the Smithsonian Institution to actualize sustainability initiatives",
  desc: [
    "SST represents a longstanding sustainability-focused relationship that CUSD has maintained with the Smithsonian Institution. In the past, our work focused on assisting the Smithsonian's National Zoo with their plastics reduction initiative. Currently, our team operates on a flexible advisory model, addressing a range of Smithsonian sustainability initiatives. In Fall 2019, we researched and wrote a report on best practices for zero-waste events planning at Smithsonian. During Spring 2020 we are excited to continue revising and updating this report as well as consulting on other sustainability projects Smithsonian has underway.",
  ],
  title: "SST",
  title2: "Smithsonian Sustainability Team",
  parallax1: sst1,
  parallax2: sst1,
  images: [sst1, sst2, sst3, sst4],
  facts: []
}

export default function sst() {
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

