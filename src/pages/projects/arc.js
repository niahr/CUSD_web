import React from 'react'
import Subteam from "../../components/projects/Subteam"
import sen_header from "../../images/project_photos/arc/arc-header.jpg"
import logo from "../../images/project_logos/arc.png"


const info = {
  mission: "Established in Fall 2017 as a project team and integrated into CUSD in Spring 2018, Alternative Recycling Cornell (ARC) will involve completing work on a plastic shredder and creating a plastic mold-injector to reshape plastic waste into other simple materials.",
  desc: [
    "We live in an age ruled by fickleness - where fads come and go, and where things are bought, adored, and then disposed.",
    "ARC likes to do things differently.",
    "We believe that the value of an item doesn't simply vanish when it's no longer trendy, nor even when it gets thrown in the trash. Every pre-loved item deserves a new life.",
    "This belief drives our mission: to eliminate waste in Cornell University and beyond, by creating new avenues that give pre-loved items new life.",
    "It has fueled our journey to create custom plastic molds and shredders that put plastic recycling back in the hands of the community. It has taken us to classrooms, where we taught sustainability's hard truths to future generations through play.",
    "And more recently, this passion led us to embark on a new ambitious project - supporting Cornell University's largest move-out sale, while navigating the difficult realities of a global pandemic. We're creating an all-new online platform to host the event, and are engaging multiple partners in this effort to divert up to 40 tons of move-out waste from landfills.",
    "Although the project is still in its infancy, our incredibly passionate team is already hard at work. Watch this space!"
  ],
  title: "ARC",
  title2: "Alternative Recycling Cornell",
  parallax1: sen_header,
  parallax2: sen_header,
  images: [],
  facts: []
}

export default function sen() {
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
        logo={logo}
      />
    </div>
  )
}
