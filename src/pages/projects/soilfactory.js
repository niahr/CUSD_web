import React from 'react'
import Subteam from "../../components/projects/Subteam"
import soil_header from "../../images/project_photos/soilfactory/soilfactory-header.png"

const info = {
  mission: "________",
  desc: [
    "As of now we have begun collecting waste from a nearby housing coop and are also waiting on the arrival of 4 waste collection devices donated to us by the company Separett. We also recently received a grant from Engaged Cornell for $3,000, $2,000 went to our two partner groups, $1,000 for GreenTree Ithaca and $1,000 to the Soil Factory node in Kenya. The last $1,000 is currently being used by us to purchase materials we plan to use to construct a straw-bale garden where the collected waste can be made use of. As of now the team is mostly working on getting designs for our Biochar system and straw-bale garden down."
  ],
  title: "Soil Factory",
  title2: "Defining the next generation of sustainable design",
  parallax1: soil_header,
  parallax2: soil_header,
  images: [],
  facts: []
}

export default function soilfactory() {
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
