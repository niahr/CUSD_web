import React from 'react'
import Subteam from "../../components/projects/Subteam"
import spr1 from "../../images/project_photos/spr/spr1.jpg"
import spr2 from "../../images/project_photos/spr/spr1.jpg"
import spr3 from "../../images/project_photos/spr/spr1.jpg"
import spr_header from "../../images/project_photos/spr/spr-header.jpg"

const info = {
  mission: "Developing solutions to reuse, refurbish, and upcycle or recycle PV panels beyond their initially intended lifetime and application",
  desc: [
    "Since Solar Panel Reboot is a new project this semester, we are currently in the research and planning phase. Our research involves how solar panels work, different ways solar panels can be damaged, how to reliably test the power output of solar panels, and potential ways of repairing damaged solar panels. We will use this research to create a plan of action."
  ],
  title: "Solar Panel Reboot",
  title2: "Defining the next generation of sustainable design",
  parallax1: spr_header,
  parallax2: spr_header,
  images: [spr1, spr2, spr3],
  facts: []
}


// solar panel reboot
export default function spr() {
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
