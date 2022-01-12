import React from 'react'
import Subteam from "../../components/projects/Subteam"
import icn_header from "../../images/project_photos/icnmodeling/icn-header.jpg"

const info = {
  mission: "Helping make existing buildings in Ithaca carbon neutral by 2030",
  desc: [
    "Existing Building Model is a consulting team working with the City of Ithaca to help make existing buildings in the city carbon neutral by the year 2030. More specifically, Existing Building Model is modeling and analyzing different retrofit options to these buildings to get the most optimal energy usage savings and greenhouse gas reductions, all of which will inform ICN 2030 Policy.",
  ],
  title: "Existing Building Model",
  title2: "Ithaca Carbon Neutral 2030 Modeling",
  parallax1: icn_header,
  parallax2: icn_header,
  images: [],
  facts: []
}

export default function icnmodeling() {
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

