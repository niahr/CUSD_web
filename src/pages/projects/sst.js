import React from 'react'
import Subteam from "../../components/projects/Subteam"
import sst1 from "../../images/project_photos/sst/sst1.jpg"
import sst2 from "../../images/project_photos/sst/sst2.png"
import sst3 from "../../images/project_photos/sst/sst3.jpg"
import sst4 from "../../images/project_photos/sst/sst4.jpg"
import sst5 from "../../images/project_photos/sst/sst5.jpg"
import sst6 from "../../images/project_photos/sst/sst6.jpg"

const info = {
  mission: "In collaboration with the Smithsonian Institution, the CUSD-SI team increasingly is focused on supporting development and integration of sustainability initiatives within and across Smithsonian departments. Our 2021-2022 projects are all centered on sustainability activities among the many SI departments focused on Collections management, transport, and housing. All four of our subprojects this year address dimensions of our ongoing collective CUSD–SI mission, partnering with SI entities to actualize sustainability initiatives.",
  desc: [
    "SST represents a longstanding sustainability-focused relationship that CUSD has maintained with the Smithsonian Institution. In past years we’ve worked with Smithsonian’s National Zoo and Smithsonian Facilities on plastics reduction, zero waste, and green building certification projects.",
  ],
  title: "SST",
  title2: "Smithsonian Sustainability Team",
  parallax1: sst5,
  parallax2: sst5,
  images: [sst1, sst5, sst6, sst4],
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
        sst={true}
      />
    </div>
  )
}

