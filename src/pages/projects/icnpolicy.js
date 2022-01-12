import React from 'react'
import Subteam from "../../components/projects/Subteam"
import icn_header from "../../images/project_photos/icnpolicy/icn-header.jpg"

const info = {
  mission: "Researching existing policies, programs, and best practices",
  desc: [
    "ICN 2030 Policy is researching existing policies, programs, and best practices in reducing greenhouse gas emissions in existing buildings with a focus on implementation in small U.S. cities. The City of Ithaca is partnering as a real-world stakeholder to implement this project's findings and server as a role model for U.S. cities."
  ],
  title: "ICN 2030 Policy",
  title2: "Ithaca Carbon Neutral 2030 Policy",
  parallax1: icn_header,
  parallax2: icn_header,
  images: [],
  facts: []
}

export default function icnpolicy() {
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
