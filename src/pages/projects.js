import * as React from "react";
import Project from "../components/projects/cardProject";
import CurrentProject from "../components/projects/scrollProject";
import Nav from "../components/navbar/nav";
import * as iconStyle from "../components/projects/projects.module.css";
import sen from "../images/project_logos/SEN.png";
import arc from "../images/project_logos/ARC.png";
import susmob from "../images/project_logos/Sustainable Mobility.png";
import aqua from "../images/project_logos/AquaCulture.jpg";
import currents from "../images/project_logos/Currents.png";
import icn2030mod from "../images/project_logos/ICN Modeling.png";
import icn2030policy from "../images/project_logos/ICN_Policy.png";
import marcomm from "../images/project_logos/MarComm.png";
import real from "../images/project_logos/REAL.jpg";
import soilfactory from "../images/project_logos/SOIL.png";
import solarpanel from "../images/project_logos/solar panel reboot.png";
import sst from "../images/project_logos/Ospri.png";
import techops from "../images/project_logos/techops.png";
import Parallax from "../components/parallax/parallax";

import solarnobk from "../images/project_photos/spr/solarbg2.png";
import icnpic from "../images/project_photos/icnmodeling/icn_building.png";
import aquapic from "../images/project_photos/aquaculture/aquapic.png";
import sennobk from "../images/project_photos/sen/sennobk.png";
import susmobnobk from "../images/project_photos/susmob/susmobnobk.png";
import bushesnobk from "../images/project_photos/soilfactory/bushesnobk.png";
import currentsnobk from "../images/project_photos/currents/currentsnobk.png";
import realnobk from "../images/project_photos/real/realnobk.png";
import sstnobk from "../images/project_photos/sst/sstnobk.png";
import solarizenobk from "../images/project_photos/solarize/solarizenobk.png";
import arcnobk from "../images/project_photos/arc/bottle.png";

import beebelake from "../images/project_logos/beebelake.jpeg";
import climateactionplan from "../images/project_logos/climateactionplan.jpeg";
import cornelltech from "../images/project_logos/cornelltech.jpeg";
import coronado from "../images/project_logos/coronado.jpeg";
import gbmp from "../images/project_logos/gbmp.jpeg";
import lights from "../images/project_logos/lights.jpeg";
import overlook from "../images/project_logos/overlook.jpeg";
import pie from "../images/project_logos/pie.jpeg";
import redo from "../images/project_logos/redo.jpeg";
import sac from "../images/project_logos/sac.jpeg";
import schoolsafrica from "../images/project_logos/schoolsafrica.jpeg";
import smartindia from "../images/project_logos/smartindia.jpeg";
import smithenergy from "../images/project_logos/smithenergy.jpeg";
import solardec from "../images/project_logos/solardec.jpeg";
import stonebarns from "../images/project_logos/stonebarns.jpeg";
import susedghana from "../images/project_logos/susedghana.jpeg";
import susneighnic from "../images/project_logos/susneighnic.jpeg";
import susresfac from "../images/project_logos/susresfac.jpeg";
import sweep from "../images/project_logos/sweep.jpeg";
import tinyhome from "../images/project_logos/tinyhome.jpeg";
import windows from "../images/project_logos/windows.jpeg";
import roots from "../images/project_logos/roots.jpeg";
import solarize from "../images/project_logos/solarize.jpeg";

import Footer from "../components/footer/footer";
import Connectwithus from "../components/footer/connectwithus";

import SNNGround from "../images/background_images/SNNground.jpg";
import solarpanelgroup from "../images/background_images/solarpanelgrouppic.jpg";

// subteams for current projects

//note changed sst solarize icn to ascending ids, if it breaks anything let me know
const projects = [
  {
    link: "/projects/arc/",
    id: 1,
    name: "ARC",
    name2: "ARC",
    subtitle: "Alternative Recycling Cornell",
    pic: arc,
    backpic: arcnobk,
  },
  {
    link: "/projects/sen/",
    id: 2,
    name: "Sustainable Education Nepal",
    name2: "SEN",
    subtitle: "CUSD x United World Schools",
    pic: sen,
    backpic: sennobk,
  },
  {
    link: "/projects/susmob/",
    id: 3,
    name: "Sustainable Mobility",
    name2: "SM",
    subtitle:
      "Re-designing the current public transportation system in Tompkins County, NY",
    pic: susmob,
    backpic: susmobnobk,
  },
  {
    link: "/projects/aquaculture/",
    id: 4,
    name: "AquaCulture",
    name2: "AquaCulture",
    subtitle: "Revolutionizing Fishing Industry with Marine Aquaculture",
    pic: aqua,
    backpic: aquapic,
  },
  {
    link: "/projects/soilfactory/",
    id: 5,
    name: "Soil Factory",
    name2: "SF",
    subtitle: "Defining the next generation of sustainable design",
    pic: soilfactory,
    backpic: bushesnobk,
  },
  {
    link: "/projects/spr/",
    id: 6,
    name: "Solar Panel Reboot",
    name2: "SPR",
    subtitle: "Defining the next generation of sustainable design",
    pic: solarpanel,
    backpic: solarnobk,
  },
  {
    link: "/projects/currents/",
    id: 7,
    name: "Currents",
    name2: "Currents",
    subtitle: "Defining the next generation of sustainable design",
    pic: currents,
    backpic: currentsnobk,
  },
  {
    link: "/projects/icnpolicy/",
    id: 8,
    name: "ICN 2030 Policy",
    name2: "ICN2030P",
    subtitle: "Ithaca Carbon Neutral 2030 Policy",
    pic: icn2030policy,
    backpic: icnpic,
  },
  {
    link: "/projects/real/",
    id: 9,
    name: "REAL",
    name2: "REAL",
    subtitle: "Empowering local farms through the system of Aquaponics",
    pic: real,
    backpic: realnobk,
  },
  {
    link: "/projects/sst/",
    id: 10,
    name: "SST",
    name2: "SST",
    subtitle: "Smithsonian Sustainability Team",
    pic: sst,
    backpic: sstnobk,
  },
  {
    link: "/projects/solarize/",
    id: 11,
    name: "Solarize",
    name2: "Solarize",
    subtitle: "Electrifying Cornell Grounds with sustainable energy sources",
    pic: solarize,
    backpic: solarizenobk,
  },
  {
    link: "/projects/icnmodeling/",
    id: 12,
    name: "ICN 2030 Neutrality Modeling",
    name2: "ICN2030M",
    subtitle: "ICN 2030 Neutrality Modeling",
    pic: icn2030mod,
    backpic: icnpic,
  },
];

// horizontal subteams
const horizteams = [
  {
    link: "/projects/techops/",
    id: 1,
    name: "Tech Ops",
    subtitle: "Developing the digital resources of CUSD",
    pic: techops,
    backpic: solarnobk,
  },
  {
    link: "/projects/marcomm/",
    id: 2,
    name: "Marketing & Communications",
    subtitle: "Defining the next generation of sustainable design",
    pic: marcomm,
    backpic: solarnobk,
  },
];

// subteams for past projects
const pastprojects = [
  {
    link: "/projects/windows/",
    id: 1,
    name: "Windows",
    subtitle:
      "Studying the feasibility and cost of thermosensitive technologies",
    pic: windows,
  },
  {
    link: "/projects/srf/",
    id: 2,
    name: "Sustainable Research Facility",
    subtitle:
      "A first-of-its-kind facility for interdisciplinary sustainability research",
    pic: susresfac,
  },
  {
    link: "/projects/solardecathlon/",
    id: 3,
    name: "Solar Decathlon",
    subtitle: "The inspiration for CUSD",
    pic: solardec,
  },
  {
    link: "/projects/ssa/",
    id: 4,
    name: "Schoolhouse South Africa",
    subtitle: "An early childhood development center for Cosmo City",
    pic: schoolsafrica,
  },
  {
    link: "/projects/blr/",
    id: 5,
    name: "Beebe Lake Redevelopment",
    subtitle: "A community space that brings students closer to nature",
    pic: beebelake,
  },
  {
    link: "/projects/seg/",
    id: 6,
    name: "Sustainable Education Ghana",
    subtitle: "CUSD x Voices of African Mothers",
    pic: susedghana,
  },
  {
    link: "/projects/roots/",
    id: 7,
    name: "Roots",
    subtitle: "Designing a two acre demonstration plot in Delhi, India",
    pic: roots,
  },
  {
    link: "/projects/sea/",
    id: 8,
    name: "Smithsonian Energy Audit",
    subtitle:
      "Conduct a full energy audit of Cooper Hewitt, the Smithsonian Design Museum in NYC",
    pic: smithenergy,
  },
  {
    link: "/projects/sac/",
    id: 9,
    name: "SAC",
    subtitle: "Solar Automated Composter",
    pic: sac,
  },
  {
    link: "/projects/pie/",
    id: 10,
    name: "PIE",
    subtitle: "Identifying the next big CUSD project",
    pic: pie,
  },
  {
    link: "/projects/nicaragua/",
    id: 11,
    name: "Sustainable Neighborhoods Nicaragua",
    subtitle:
      "A model of healthy, sustainable, and low-cost housing for South America",
    pic: susneighnic,
  },
  {
    link: "/projects/sweep/",
    id: 12,
    name: "Sweep",
    subtitle: "Solid Waste Environmental Excellence Protocol",
    pic: sweep,
  },
  {
    link: "/projects/lights/",
    id: 13,
    name: "Lights",
    subtitle:
      "Testing the effectiveness of endangered amphibian conservation at Cornell",
    pic: lights,
  },
  {
    link: "/projects/stonebarns/",
    id: 14,
    name: "Stone Barns",
    subtitle: "Rethinking recycling with Blue Hill Farms",
    pic: stonebarns,
  },
  {
    link: "/projects/coronado/",
    id: 15,
    name: "Coronado",
    subtitle: "Defending our way of life from climate change",
    pic: coronado,
  },
  {
    link: "/projects/tinyhome/",
    id: 16,
    name: "Tiny Home",
    subtitle: "Big changes, small homes",
    pic: tinyhome,
  },
  {
    link: "/projects/ord/",
    id: 17,
    name: "Overlook Ridge Development",
    subtitle:
      "Providing a full site plan along with sustainable and affordable energy and infrastructure options for the development",
    pic: overlook,
  },
  {
    link: "/projects/cap/",
    id: 18,
    name: "Climate Action Plan",
    subtitle: "Advancing Cornell's goal of net-zero energy by 2035",
    pic: climateactionplan,
  },
  {
    link: "/projects/tech/",
    id: 19,
    name: "Cornell Tech",
    subtitle: "Designing a sustainable future for Cornell in NYC",
    pic: cornelltech,
  },
  {
    link: "/projects/gbmp/",
    id: 20,
    name: "Green Building Metrics Project",
    subtitle: "Empowering consumers to make informed, sustainable purchases",
    pic: gbmp,
  },
  {
    link: "/projects/svi/",
    id: 21,
    name: "Smart Village India",
    subtitle:
      "Creating smart, sustainable resource management systems in a resource limited region",
    pic: smartindia,
  },
  {
    link: "/projects/redo/",
    id: 22,
    name: "REDO",
    subtitle: "Rethinking waste at the Smithsonian National Zoo",
    pic: redo,
  },
];

// research groups and organizations (displayed at bottom as text)
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
  "Mobile Research Facility (MoRF)",
];

const ProjectPage = () => {
  return (
    <main>
      <Nav />
      <Parallax image={SNNGround} caption={"Project Teams"} height={550}>
        {" "}
      </Parallax>
      <CurrentProject projects={projects} />
      <hr className={iconStyle.line}></hr>
      <h1 className={iconStyle.headers}>Horizontal Project Teams</h1>
      <Project className={iconStyle.wrapper} projects={horizteams} />
      <hr className={iconStyle.line}></hr>
      <h1 className={iconStyle.headers}>Past Project Teams</h1>
      <Project className={iconStyle.wrapper} projects={pastprojects} />
      <h1 className={iconStyle.headers}>Research, Events, and Outreach</h1>
      <div className={iconStyle.research}>
        {research.map((item, i) => (
          <div className={iconStyle.researchItem} key={i}>
            {item}
          </div>
        ))}
      </div>
      <Parallax image={solarpanelgroup} height={350}>
        {" "}
      </Parallax>

      <Footer />
      <Connectwithus />
    </main>
  );
};

export default ProjectPage;
