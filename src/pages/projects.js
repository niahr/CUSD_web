import * as React from "react"
import Project from '../components/projects/project'
import Nav from '../components/navbar/nav'
import * as iconStyle from "../components/projects/projects.module.css"
import sen from "../images/project_logos/SEN.png"
import arc from "../images/project_logos/ARC.png"
import susmob from "../images/project_logos/Sustainable Mobility.png"
import aqua from "../images/project_logos/AquaCulture.jpg"
import currents from "../images/project_logos/Currents.png"
import icn2030mod from "../images/project_logos/ICN Modeling.png"
import icn2030policy from "../images/project_logos/ICN_Policy.png"
import marcomm from "../images/project_logos/MarComm.png"
import real from "../images/project_logos/REAL.jpg"
import soilfactory from "../images/project_logos/SOIL.png"
import solarpanel from "../images/project_logos/solar panel reboot.png"
import ssd from "../images/project_logos/Ospri.png"
import techops from "../images/project_logos/techops.png"

import beebelake from "../images/project_logos/beebelake.jpeg"
import climateactionplan from "../images/project_logos/climateactionplan.jpeg"
import cornelltech from "../images/project_logos/cornelltech.jpeg"
import coronado from "../images/project_logos/coronado.jpeg"
import gbmp from "../images/project_logos/gbmp.jpeg"
import lights from "../images/project_logos/lights.jpeg"
import overlook from "../images/project_logos/overlook.jpeg"
import pie from "../images/project_logos/pie.jpeg"
import redo from "../images/project_logos/redo.jpeg"
import sac from "../images/project_logos/sac.jpeg"
import schoolsafrica from "../images/project_logos/schoolsafrica.jpeg"
import smartindia from "../images/project_logos/smartindia.jpeg"
import smithenergy from "../images/project_logos/smithenergy.jpeg"
import solardec from "../images/project_logos/solardec.jpeg"
import stonebarns from "../images/project_logos/stonebarns.jpeg"
import susedghana from "../images/project_logos/susedghana.jpeg"
import susneighnic from "../images/project_logos/susneighnic.jpeg"
import susresfac from "../images/project_logos/susresfac.jpeg"
import sweep from "../images/project_logos/sweep.jpeg"
import tinyhome from "../images/project_logos/tinyhome.jpeg"
import windows from "../images/project_logos/windows.jpeg"
import roots from "../images/project_logos/roots.jpeg"
import solarize from "../images/project_logos/solarize.jpeg"

import Footer from "../components/footer/footer"
import Connectwithus from "../components/footer/connectwithus"


// markup
const projects = [
  { id: 1, name: 'Sustainable Education Nepal', subtitle: 'CUSD x United World Schools', pic: sen },
  { id: 2, name: 'ARC', subtitle: 'Alternative Recycling Cornell', pic: arc },
  { id: 3, name: 'Sustainable Mobility', subtitle: 'Re-design the current public transportation system in Tompkins County, NY', pic: susmob },
  { id: 4, name: 'AquaCulture', subtitle: 'Revolutionizing Fishing Industry with Marine Aquaculture', pic: aqua },
  { id: 5, name: 'Soil Factory', subtitle: 'Defining the next generation of sustainable design', pic: soilfactory },
  { id: 6, name: 'Solar Panel Reboot', subtitle: 'Defining the next generation of sustainable design', pic: solarpanel },
  { id: 7, name: 'Currents', subtitle: 'Defining the next generation of sustainable design', pic: currents },
  { id: 8, name: 'ICN 2030 Policy', subtitle: 'Ithaca Carbon Neautral 2030 Policy', pic: icn2030policy },
  { id: 9, name: 'REAL', subtitle: 'Empowering local farms through the system of Aquaponics', pic: real },
  { id: 11, name: 'SST', subtitle: 'Smithsonian Sustainability Team', pic: ssd },
  { id: 12, name: 'Solarize', subtitle: 'Electrifying Cornell Grounds with sustainable energy sources', pic: solarize },
  { id: 13, name: 'ICN 2030 Neutrality Modeling', subtitle: 'ICN 2030 Neutrality Modeling', pic: icn2030mod }
]

const horizteams = [
  { id: 1, name: 'Tech Ops', subtitle: 'Developing the digital resources of CUSD', pic: techops },
  { id: 2, name: 'Marketing & Communications', subtitle: 'Defining the next generation of sustainable design', pic: marcomm }
]

const pastprojects = [
  { id: 1, name: 'Windows', subtitle: 'Studying the feasibility and cost of thermosensitive technologies', pic: windows },
  { id: 2, name: 'Sustainable Research Facility', subtitle: 'A first-of-its-kind facility for interdisciplinary sustainability research', pic: susresfac },
  { id: 3, name: 'Solar Decathlon', subtitle: 'The inspiration for CUSD', pic: solardec },
  { id: 4, name: 'Schoolhouse South Africa', subtitle: 'An early childhood development center for Cosmo City', pic: schoolsafrica },
  { id: 5, name: 'Beebe Lake Redevelopment', subtitle: 'A community space that brings students closer to nature', pic: beebelake },
  { id: 6, name: 'Sustainable Education Ghana', subtitle: 'CUSD x Voices of African Mothers', pic: susedghana },
  { id: 7, name: 'Roots', subtitle: 'Designing a two acre demonstration plot in Delhi, India', pic: roots },
  { id: 8, name: 'Smithsonian Energy Audit', subtitle: 'Conduct a full energy audit of Cooper Hewitt, the Smithsonian Design Museum in NYC', pic: smithenergy },
  { id: 9, name: 'SAC', subtitle: 'Solar Automated Composter', pic: sac },
  { id: 10, name: 'PIE', subtitle: 'Identifying the next big CUSD project', pic: pie },
  { id: 11, name: 'Sustainable Neighborhoods Nicaragua', subtitle: 'A model of healthy, sustainable, and low-cost housing for South America', pic: susneighnic },
  { id: 12, name: 'Sweep', subtitle: 'Solid Waste Environmental Excellence Protocol', pic: sweep },
  { id: 13, name: 'Lights', subtitle: 'Testing the effectiveness of endangered amphibian conservation at Cornell', pic: lights },
  { id: 14, name: 'Stone Barns', subtitle: 'Rethinking recycling with Blue Hill Farms', pic: stonebarns },
  { id: 15, name: 'Coronado', subtitle: 'Defending our way of life from climate change', pic: coronado },
  { id: 16, name: 'Tiny Home', subtitle: 'Big changes, small homes', pic: tinyhome },
  { id: 17, name: 'Overlook Ridge Development', subtitle: 'Providing a full site plan along with sustainable and affordable energy and infrastructure options for the development', pic: overlook },
  { id: 18, name: 'Climate Action Plan', subtitle: 'Advancing Cornell\'s goal of net-zero energy by 2035', pic: climateactionplan },
  { id: 19, name: 'Cornell Tech', subtitle: 'Designing a sustainable future for Cornell in NYC', pic: cornelltech },
  { id: 20, name: 'Green Building Metrics Project', subtitle: 'Empowering consumers to make informed, sustainable purchases', pic: gbmp },
  { id: 21, name: 'Smart Village India', subtitle: 'Creating smart, sustainable resource management systems in a resource limited region', pic: smartindia },
  { id: 22, name: 'REDO', subtitle: 'Rethinking waste at the Smithsonian National Zoo', pic: redo },
]

const research = [
  "USGBC GreenBuild Bus Tour",
  "Interdisciplinary Sustainability Student Summit",
  "CUSD 5-Year Anniversary Gallery",
  "Farm Pond Circle",
  "Constructed Wetlands",
  "Fiber Optic Lighting",
  "Brooklyn Children's Museum Workshops",
  "Harlem Children's Zone Sustainability Curriculum",
  "Cornell Re-Innovations",
  "CUSD Consulting",
  "Anaerobic Digestion",
  "Mobile Research Facility (MoRF)"
]

const ProjectPage = () => {
  return (
    <main>
      <Nav />
      <h1 className={iconStyle.headers}>Current Projects</h1>
      <Project className={iconStyle.wrapper} projects={projects} />
      <hr className={iconStyle.line}></hr>
      <h1 className={iconStyle.headers}>Horizontal Teams</h1>
      <Project className={iconStyle.wrapper} projects={horizteams} />
      <hr className={iconStyle.line}></hr>
      <h1 className={iconStyle.headers}>Past Projects</h1>
      <Project className={iconStyle.wrapper} projects={pastprojects} />
      <h1 className={iconStyle.headers}>Research, Events, and Outreach</h1>
      <div className={iconStyle.research}>
        {
          research.map((item, i) =>
            <div
              className={iconStyle.researchItem}
              key={i}
            >
              {item}
            </div>
          )
        }
      </div>
      <Footer />
      <Connectwithus />

    </main >
  )
}

export default ProjectPage