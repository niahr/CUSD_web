import React from 'react'
import Subteam from "../../components/projects/Subteam"
import tinyhome_header from "../../images/project_photos/tinyhome/tinyhome-header.jpg"

const info = {
  mission: "The goal of this project is to create a mobile tiny home with hands-on, interactive exhibits that show the inner workings of energy efficient features, renewable energy, and other home technologies. This tiny home will then be brought to diverse audiences throughout the area to educate them on easy, cost saving techniques they can implement in their homes.",
  desc: [
    "",
  ],
  title: "Tiny Home",
  title2: "Big changes, small homes",
  parallax1: tinyhome_header,
  parallax2: tinyhome_header,
  images: [],
  facts: []
}

export default function tinyhome() {
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

