import React from 'react'
import Subteam from "../../components/projects/Subteam"
import blr1 from "../../images/project_photos/blr/blr1.jpg"
import blr2 from "../../images/project_photos/blr/blr2.jpg"
import blr3 from "../../images/project_photos/blr/blr3.jpg"
import funding from "../../images/project_photos/blr/funding.jpg"
import LEED from "../../images/project_photos/blr/LEED.jpg"
import blr_header from "../../images/project_photos/blr/blr-header.jpg"

const info = {
  mission: "The Beebe Lake Redevelopment project tasked student engineers, architects, and strategists to work together to attempt to bring the first student led design and construction project to Cornell's campus. The historical implications of the construction project was based on a center of student life called Japes Lodges, which used to stand by Beebe Lake on Cornell's North Campus. The building burned down over 50 years ago and all that was left standing was a small shed used for storage for Cornell Outdoor Education. The BLR team worked to develop a plan for a physical building that would bring modern, non-disruptive facilities to the natural landscape around the lakefront.",
  desc: [
    "The main stakeholders for this project were Cornell Outdoor Education, Cornell Plantations, and Cornell Outing Club. The BLR team worked closely with these organizations to develop plans that would satisfy the needs for these groups. The Cornell Facilities department also assisted the Beebe project by providing information and guidance on developing energy efficient plans for buildings on campus. All new Cornell building projects must at least qualify for a LEED Silver rating, but the BLR team aimed to bring a LEED Platinum rating to the site.",
    "Plans also included the redevelopment of the land surround Beebe Lake, in an effort to restore and promote the area as a popular place for exploring nature around Cornell's campus. The BLR team partnered with local renewable energy technology companies to explore the feasibility and costs associated with installing systems with solar panels, green roofs, and hydropower turbines along the site. The BLR team presented plans to Cornell's administration and got the project approved to be added to Cornell's capital plan. Currently, the project is seeking funding to qualify for construction to begin on the site."
  ],
  title: "Beebe Lake Redevelopment",
  title2: "A community space that brings students closer to nature",
  parallax1: blr_header,
  parallax2: blr_header,
  images: [blr1, blr2, blr3],
  facts: [
    {
      number: 0,
      numberLabel: 'Seeking Funding',
      metric: 'Current Stage',
      color: '#22a84a',
      background: funding
    },
    {
      number: 0,
      numberLabel: 'Platinum',
      metric: 'Potential LEED Rating',
      color: '#12a38d',
      background: LEED
    },
    {
      number: 3,
      numberLabel: '3',
      metric: 'Main Stakeholders',
      color: '#02664b'
    }
  ]
}

// beebe lake
export default function blr() {
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

