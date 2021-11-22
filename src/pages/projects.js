import * as React from "react"
import { Link } from "gatsby"
import ProjectList from '../projectscomponents/project'
import Nav from '../components/nav'
import * as iconStyle from "../projectscomponents/projects.module.css"

import sen from "../icons/SEN.png"
import arc from "../icons/ARC.png"
import susmob from "../icons/Sustainable Mobility.png"
import aqua from "../icons/AquaCulture.jpg"
import currents from "../icons/Currents.png"
import icn2030mod from "../icons/ICN Modeling.png"
import icn2030policy from "../icons/ICN_Policy.png"
import marcomm from "../icons/MarComm.png"
import real from "../icons/REAL.jpg"
import soilfactory from "../icons/SOIL.png"
import solarpanel from "../icons/solar panel reboot.png"
import ssd from "../icons/Ospri.png"
import techops from "../icons/techops.png"

import beebelake from "../icons/beebelake.jpeg"
import climateactionplan from "../icons/climateactionplan.jpeg"
import cornelltech from "../icons/cornelltech.jpeg"
import coronado from "../icons/coronado.jpeg"
import gbmp from "../icons/gbmp.jpeg"
import lights from "../icons/lights.jpeg"
import overlook from "../icons/overlook.jpeg"
import pie from "../icons/pie.jpeg"
import redo from "../icons/redo.jpeg"
import sac from "../icons/sac.jpeg"
import schoolsafrica from "../icons/schoolsafrica.jpeg"
import smartindia from "../icons/smartindia.jpeg"
import smithenergy from "../icons/smithenergy.jpeg"
import solardec from "../icons/solardec.jpeg"
import stonebarns from "../icons/stonebarns.jpeg"
import susedghana from "../icons/susedghana.jpeg"
import susneighnic from "../icons/susneighnic.jpeg"
import susresfac from "../icons/susresfac.jpeg"
import sweep from "../icons/sweep.jpeg"
import tinyhome from "../icons/tinyhome.jpeg"
import windows from "../icons/windows.jpeg"
import roots from "../icons/roots.jpeg"
import solarize from "../icons/solarize.jpeg"

// markup
const projects = [{id: 1, name: 'Sustainable Education Nepal', subtitle: 'CUSD x United World Schools', pic: sen},
                  {id: 2, name: 'ARC', subtitle: 'Alternative Recycling Cornell', pic: arc},
                  {id: 3, name: 'Sustainable Mobility', subtitle: 'Re-design the current public transportation system in Tompkins County, NY', pic: susmob},
                  {id: 4, name: 'AquaCulture', subtitle: 'Revolutionizing Fishing Industry with Marine Aquaculture', pic: aqua},
                  {id: 5, name: 'Soil Factory', subtitle: 'Defining the next generation of sustainable design', pic: soilfactory},
                  {id: 6, name: 'Solar Panel Reboot', subtitle: 'Defining the next generation of sustainable design', pic: solarpanel},
                  {id: 7, name: 'Currents', subtitle: 'Defining the next generation of sustainable design', pic: currents},
                  {id: 8, name: 'ICN 2030 Policy', subtitle: 'Ithaca Carbon Neautral 2030 Policy', pic: icn2030policy},
                  {id: 9, name: 'REAL', subtitle: 'Empowering local farms through the system of Aquaponics', pic: real},
                  {id: 11, name: 'SST', subtitle: 'Smithsonian Sustainability Team', pic: ssd},
                  {id: 12, name: 'ICN 2030 Neutrality Modeling', subtitle: 'ICN 2030 Neutrality Modeling', pic: icn2030mod}]

const horizteams = [{id: 1, name: 'Tech Ops', subtitle: 'Developing the digital resources of CUSD', pic: techops},
                    {id: 2, name: 'Marketing & Communications', subtitle: 'Defining the next generation of sustainable design', pic: marcomm}]

const pastprojects = [{id: 1, name: 'Windows', subtitle: 'Studying the feasibility and cost of thermosensitive technologies', pic: windows},
                      {id: 2, name: 'Sustainable Research Facility', subtitle: 'A first-of-its-kind facility for interdisciplinary sustainability research', pic: susresfac},
                      {id: 3, name: 'Solar Decathlon', subtitle: 'The inspiration for CUSD', pic: solardec},
                      {id: 4, name: 'Schoolhouse South Africa', subtitle: 'An early childhood development center for Cosmo City', pic: schoolsafrica},
                      {id: 5, name: 'Beebe Lake Redevelopment', subtitle: 'A community space that brings students closer to nature', pic:beebelake},
                      {id: 6, name: 'Sustainable Education Ghana', subtitle: 'CUSD x Voices of African Mothers', pic: susedghana},
                      {id: 7, name: 'Roots', subtitle: 'Designing a two acre demonstration plot in Delhi, India', pic: roots},
                      {id: 8, name: 'Smithsonian Energy Audit', subtitle: 'Conduct a full energy audit of Cooper Hewitt, the Smithsonian Design Museum in NYC', pic: smithenergy},
                      {id: 9, name: 'SAC', subtitle: 'Solar Automated Composter', pic: sac},
                      {id: 10, name: 'PIE', subtitle: 'Identifying the next big CUSD project', pic: pie},
                      {id: 11, name: 'Sustainable Neighborhoods Nicaragua', subtitle: 'A model of healthy, sustainable, and low-cost housing for South America', pic: susneighnic},
                      {id: 12, name: 'Sweep', subtitle: 'Solid Waste Environmental Excellence Protocol', pic: sweep},
                      {id: 13, name: 'Lights', subtitle: 'Testing the effectiveness of endangered amphibian conservation at Cornell', pic: lights},
                      {id: 14, name: 'Stone Barns', subtitle: 'Rethinking recycling with Blue Hill Farms', pic: stonebarns},
                      {id: 15, name: 'Coronado', subtitle: 'Defending our way of life from climate change', pic: coronado},
                      {id: 16, name: 'Tiny Home', subtitle: 'Big changes, small homes', pic: tinyhome},
                      {id: 17, name: 'Overlook Ridge Development', subtitle: 'Providing a full site plan along with sustainable and affordable energy and infrastructure options for the development', pic: overlook},
                      {id: 18, name: 'Climate Action Plan', subtitle: 'Advancing Cornell\'s goal of net-zero energy by 2035', pic:climateactionplan},
                      {id: 19, name: 'Cornell Tech', subtitle: 'Designing a sustainable future for Cornell in NYC', pic: cornelltech},
                      {id: 20, name: 'Green Building Metrics Project', subtitle: 'Empowering consumers to make informed, sustainable purchases', pic: gbmp},
                      {id: 21, name: 'Smart Village India', subtitle: 'Creating smart, sustainable resource management systems in a resource limited region', pic: smartindia},
                      {id: 22, name: 'REDO', subtitle: 'Rethinking waste at the Smithsonian National Zoo', pic: redo},
                      {id: 11, name: 'Solarize', subtitle: 'Electrifying Cornell Grounds with sustainable energy sources', pic: solarize}
                      ]

const ProjectPage = () => {
  return (
    <main>
      <Nav/>
      <h1 className={iconStyle.headers}>Current Projects</h1>
      <ProjectList projects={projects} />
      <hr className={iconStyle.line}></hr>
      <h1 className={iconStyle.headers}>Horizontal Teams</h1>
      <ProjectList projects={horizteams} />
      <hr className={iconStyle.line}></hr>
      <h1 className={iconStyle.headers}>Past Projects</h1>
      <ProjectList projects={pastprojects} />
    </main>
  )
}

export default ProjectPage