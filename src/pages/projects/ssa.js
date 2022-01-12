import React from 'react'
import Subteam from "../../components/projects/Subteam"
import ssa1 from "../../images/project_photos/ssa/ssa1.jpg"
import ssa2 from "../../images/project_photos/ssa/ssa2.jpg"
import ssa3 from "../../images/project_photos/ssa/ssa3.jpg"
import ssa4 from "../../images/project_photos/ssa/ssa4.jpg"
import ssa5 from "../../images/project_photos/ssa/ssa5.jpg"
import ssa6 from "../../images/project_photos/ssa/ssa6.jpg"
import ssa7 from "../../images/project_photos/ssa/ssa7.jpg"
import ssa8 from "../../images/project_photos/ssa/ssa8.jpg"
import ssa9 from "../../images/project_photos/ssa/ssa9.jpg"
import ssa_header from "../../images/project_photos/ssa/ssa-header.jpg"

const info = {
  mission: "The socially-minded Schoolhouse South Africa (SSA) project resulted in the construction of a 6,000 square foot early childhood development center and teacher training facility in Cosmo City, South Africa. Grown out of collaboration with local groups and residents, the schoolhouse is a beacon for education and passive sustainable technologies, and is a landmark and a source of pride for the developing community. The schoolhouse accommodates 80 students between the ages of 1 and 7.",
  desc: [
    "With classrooms, indoor and outdoor play areas, and interactive spaces for group learning, creative play and social development, the center will serve 80 students a year and double as a teacher training facility. It has been designated by the executive mayor of Johannesburg as a Center of Excellence and is the forerunner for several schools to follow.",
    "The community is 'very excited' and 'very proud,' said project director Barry Beagen '11, who studied civil and environmental engineering at Cornell. 'When we walk around the city, mothers will come up to ask how they can enroll their children or how they can work in the school to teach, to cook or to help,' he said.",
    "Schoolhouse South Africa is aligned with a national South African initiative to improve early childhood education. Project partners include Education Africa, a nonprofit organization working to reduce poverty through education; Play with a Purpose, an early childhood education program; Basil Read Developments; and the city of Johannesburg.",
    "CUSD collaborated with a second-year architecture studio to design the building for zero environmental impact. No electricity is needed for heating and cooling the solar-passive building, and high-performance windows and glazing provide natural ventilation and insulation. An earthbag wall system uses sand -- taken directly from the excavation of the building's foundation -- as insulation and thermal mass.",
    "The mayor's visit gave the project 'a very high endorsement, which is rare,' Beagen said. 'He was impressed that we were using local building technologies such as the earthbag system developed in Cape Town. In his speech, he aligned our project with the city's overall vision for livable cities and resource sustainability.'",
    "The schoolhouse project began during the spring 2010 semester. During the 2010-11 academic year, students surveyed the community's needs and cataloged existing and potential sustainable construction practices in South Africa. They then created a comprehensive atlas of their research to inform the center's design. The atlas is available in the Mann, Carpenter and Fine Arts libraries on campus.",
    "Benefits for the CUSD team were many, Beagen said. 'Apart from learning how to work in a professional environment with an extremely tight schedule,' he said, 'we learned construction management skills, carpentry, organizing suppliers, managing sponsors, organizing events such as the groundbreaking, marketing and other skills.'",
    "'Most importantly we have learned how to take on responsibilities in real life,' Beagen said. CUSD participants 'have a new sense of responsibility for society knowing that their skills and education can directly contribute to development. [Our lives] have no doubt been changed with this experience.'",
  ],
  title: "Schoolhouse South Africa",
  title2: "An early childhood development center for Cosmo City",
  parallax1: ssa_header,
  parallax2: ssa_header,
  images: [ssa1, ssa2, ssa3, ssa4, ssa5, ssa6, ssa7, ssa8, ssa9],
  facts: [
    {
      number: 300,
      numberLabel: '6,000',
      metric: 'Total Building Area (Sq. Ft.)',
      color: '#22a84a'
    },
    {
      number: 200,
      numberLabel: '$500,000',
      metric: 'Money Raised',
      color: '#12a38d'
    },
    {
      number: 4,
      numberLabel: '4 Classrooms for 80 Students',
      metric: 'School Size',
      color: '#02664b'
    }
  ]
}

export default function ssa() {
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

