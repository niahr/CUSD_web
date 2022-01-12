import React from 'react'
import Subteam from "../../components/projects/Subteam"
import cap1 from "../../images/project_photos/cap/cap1.jpg"
import cap2 from "../../images/project_photos/cap/cap2.jpg"
import cap3 from "../../images/project_photos/cap/cap3.jpg"
import wind from "../../images/project_photos/cap/wind.jpg"
import cap_header from "../../images/project_photos/cap/cap-header.jpg"

const info = {
  mission: "Members of the Climate Action Plan project worked closely with the Cornell Facilities department and Cornell's Campus Sustainability Office to help advance the university-wide action plan to achieve carbon neutrality by 2035. Focusing on particular actions from the plan, each team had the unique opportunity to see the value of their work has right on campus.",
  desc: [
    "CAP teams have done a feasibility study on the placement of a wind turbine on campus property and researched ways to make the currently existing on-campus hydropower plant more modern and efficient, as well as looking into innovative ways to educate the public on alternative energy.",
    "The CAP project is always interested in determining new ways to pursue climate neutrality for the Ithaca campus by forming new partnerships on campus. In potential future projects, CAP aims to continue making an impact by taking on and helping to accomplish other actions from Cornell's climate action plan."
  ],
  title: "Climate Action Plan",
  title2: "Advancing Cornell's goal of net-zero energy by 2035",
  parallax1: cap_header,
  parallax2: cap_header,
  images: [cap1, cap2, cap3],
  facts: [
    {
      number: 0,
      numberLabel: 'Demonstrating Wind Power',
      metric: 'An Educational Model',
      color: '#22a84a',
      background: wind
    },
    {
      number: 62,
      numberLabel: '62 kW',
      metric: 'Recommended Wind Turbine',
      color: '#12a38d'
    },
    {
      number: 6,
      numberLabel: '6 Linear Materials',
      metric: 'Hydropower Options Researched',
      color: '#02664b'
    }
  ]
}

export default function cap() {
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

