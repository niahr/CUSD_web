import React from 'react'
import Subteam from "../../components/projects/Subteam"
import coronado1 from "../../images/project_photos/coronado/coronado1.jpg"
import coronado2 from "../../images/project_photos/coronado/coronado2.jpg"
import coronado3 from "../../images/project_photos/coronado/coronado3.jpg"
import coronado_header from "../../images/project_photos/coronado/coronado-header.jpg"

const info = {
  mission: "Working with the National Guard to develop renewable energy sites at various National Guard bases",
  desc: [
    "The nation is in desperate need of more renewable energy. There was an idea that the National Guard could be hired on as full-time employees to construct renewable energy developments at National Guard bases. This would not only provide National Guard employees with a lifelong trade skill but would also increase the amount of renewable energy being used in the Department of Defense, while also helping to mitigate one of the biggest current threats to our way of life: climate change. Our team of engineers has been working with contacts in the National Guard to write a proposal with the long-term goal of pushing our ideas through congress to make a real-world impact with full-scale implementations.",
  ],
  title: "Coronado",
  title2: "Defending our way of life from climate change",
  parallax1: coronado_header,
  parallax2: coronado_header,
  images: [coronado1, coronado2, coronado3],
  facts: []
}

export default function coronado() {
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

