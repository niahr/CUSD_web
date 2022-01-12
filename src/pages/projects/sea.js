import React from 'react'
import Subteam from "../../components/projects/Subteam"
import sea1 from "../../images/project_photos/sea/sea1.jpg"
import sea2 from "../../images/project_photos/sea/sea2.jpg"
import sea3 from "../../images/project_photos/sea/sea3.jpg"
import sea_header from "../../images/project_photos/sea/sea-header.jpg"

const info = {
  mission: "Smithsonian Energy Audit looks to analyze the Cooper Hewitt Museum by understanding the ASHRAE standards and visiting the site to collect data and write a comprehensive report.",
  desc: [
    "This project is a full-scale energy audit of Smithsonian's design museum, giving students experience with energy-based consulting and software, all for one of the East-Coast meccas of design. The team has done research on local rebate and other audit-related information required, and familiarized themselves with the tools needed to conduct the audit through dummy building models. They have been developing a scope document for the stakeholder and are working to establish a better connection with the contact at Smithsonian.",
  ],
  title: "Smithsonian Energy Audit",
  title2: "Conduct a full energy audit of Cooper Hewitt, the Smithsonian Design Museum in NYC",
  parallax1: sea_header,
  parallax2: sea_header,
  images: [sea1, sea2, sea3],
  facts: []
}

export default function sea() {
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

