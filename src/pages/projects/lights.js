import React from 'react'
import Subteam from "../../components/projects/Subteam"
import lights1 from "../../images/project_photos/lights/lights1.jpg"
import lights2 from "../../images/project_photos/lights/lights2.jpg"
import lights3 from "../../images/project_photos/lights/lights3.jpg"
import salamander from "../../images/project_photos/lights/salamander.jpg"

import lights_header from "../../images/project_photos/lights/lights-header.jpg"

const info = {
  mission: "The Lights team was initiated to begin to test methods to increase endangered salamander populations in Cornell's Ringwood Natural Area. The three natives species of salamanders that we are targeting spend the majority of their lifetime in dry forests, except during stages of reproduction, in which they migrate to ponds to breed and lay their eggs. The initial migration occurs during the spring, after the first warm rainfall when the soil thaws. The primary issue we are addressing are deaths that happen during this migration. Ringwood is dissected by many roads that these amphibians need to cross for this migration. This means that cars are the leading cause of death for them.",
  desc: [
    "Cornell Plantations built a culvert in the main path of migration, which is meant to funnel in the salamanders to a specific tunnel under the road and allow them to cross from dry forest to woodland pond, unaffected by the traffic above.",
    "The current issue we are faced with is whether or not the salamanders make use of the culvert. Thus, we developed a monitoring system using cameras to establish data on the effectiveness of the current culvert. After analyzing our data and determining this effectiveness we will work on improving the current culvert with a solar light system.",
    "Protecting salamanders is important because they are a vital species to the area and to the plantations. Salamanders control populations of insects known to be pests such as ticks and mosquitoes. If their populations continue to decline, we see a decline in the ecological services that are beneficial to the forest."
  ],
  title: "Lights",
  title2: "Testing the effectiveness of endangered amphibian conservation at Cornell",
  parallax1: lights_header,
  parallax2: lights_header,
  images: [lights1, lights2, lights3],
  facts: [
    {
      number: 0,
      numberLabel: 'Yellow Salamanders',
      metric: 'Species of Focus',
      color: '#22a84a',
      background: salamander
    },
    {
      number: 200,
      numberLabel: '200 Per Season',
      metric: 'New Eggs Layed By Females',
      color: '#12a38d'
    },
    {
      number: 20,
      numberLabel: '20',
      metric: 'Lifespan in Years',
      color: '#02664b'
    }
  ],
}

export default function lights() {
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

