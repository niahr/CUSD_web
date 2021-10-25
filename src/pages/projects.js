import * as React from "react"
import { Link } from "gatsby"
import ProjectList from '../projectscomponents/project'
import Nav from '../components/nav'

import susedunepal from "../icons/susedunepal.png";
import arc from "../icons/arc.png"
import susmob from "../icons/susmob.png"
import aqua from "../icons/aqua.png"

// markup
const projects = [{id: 1, name: 'Sustainable Education Nepal', subtitle: 'CUSD x United World Schools', pic: susedunepal},
                  {id: 2, name: 'ARC', subtitle: 'Alternative Recycling Cornell', pic: arc},
                  {id: 3, name: 'Sustainable Mobility', subtitle: 'Re-design the current public transportation system in Tompkins County, NY', pic: susmob},
                  {id: 4, name: 'AquaCulture', subtitle: 'Revolutionizing Fishing Industry with Marine Aquaculture', pic: aqua},
                  {id: 5, name: 'Soil Factory', subtitle: 'Defining the next generation of sustainable design'},
                  {id: 6, name: 'Solar Panel Reboot', subtitle: 'Defining the next generation of sustainable design'},
                  {id: 7, name: 'Currents', subtitle: 'Defining the next generation of sustainable design'},
                  {id: 8, name: 'ICN 2030 Policy', subtitle: 'Ithaca Carbon Neautral 2030 Policy'},
                  {id: 9, name: 'REAL', subtitle: 'Empowering local farms through the system of Aquaponics'},
                  {id: 10, name: 'SST', subtitle: 'Smithsonian Sustainability Team'},
                  {id: 11, name: 'Solarize', subtitle: 'Electrifying Cornell Grounds with sustainable energy sources'},
                  {id: 12, name: 'ICN 2030 Neutrality Modeling', subtitle: 'ICN 2030 Neutrality Modeling'}]

const ProjectPage = () => {
  return (
    <main>
      <Nav/>
      <ProjectList projects={projects} />
    </main>
  )
}

export default ProjectPage