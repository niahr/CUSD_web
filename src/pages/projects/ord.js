import React from 'react'
import Subteam from "../../components/projects/Subteam"
import ord1 from "../../images/project_photos/ord/ord1.jpg"
import ord2 from "../../images/project_photos/ord/ord2.jpg"
import ord3 from "../../images/project_photos/ord/ord3.jpg"
import ord_header from "../../images/project_photos/ord/ord-header.jpg"

const info = {
  mission: "Located in Little Falls, New York, the Overlook Ridge Development combines cutting-edge, sustainable living with world-class leadership education.",
  desc: [
    "Designing a net-zero housing development in Little Falls New York by providing specific clean energy recommendations and developing a full site plan.",
  ],
  title: "Overlook Ridge Development",
  title2: "Providing a full site plan along with sustainable and affordable energy and infrastructure options for the development",
  parallax1: ord_header,
  parallax2: ord_header,
  images: [ord1, ord2, ord3],
  facts: [
    {
      number: 12,
      numberLabel: '12',
      metric: 'Number of Team Members',
      color: '#22a84a'
    },
    {
      number: 2,
      numberLabel: '2',
      metric: 'Number of Marcomm Members',
      color: '#12a38d'
    }
  ]
}

export default function ord() {
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

