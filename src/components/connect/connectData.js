import GraceT from '../../images/contact/GraceT.png'
import ErinH from '../../images/contact/ErinH.png'
import FrannieL from '../../images/contact/FrannieL.png'
import RyanT from '../../images/contact/RyanT.png'
import NelsonO from '../../images/contact/NelsonO.png'
import LouisaB from '../../images/contact/LouisaB.png'
import DakotaC from '../../images/contact/DakotaC.png'
import BonnyW from '../../images/contact/BonnyW.png'
import AllanM from '../../images/contact/AllanM.png'
import AkankshaS from '../../images/contact/AkankshaS.png'
import AdaL from '../../images/contact/AdaL.png'
import CarterE from '../../images/contact/CarterE.png'
import ElieC from '../../images/contact/ElieC.png'
import NimraS from '../../images/contact/NimraS.png'
import NaomiK from '../../images/contact/NaomiK.png'
import JolieW from '../../images/contact/JolieW.png'
import MiaM from '../../images/contact/MiaM.png'
import NatalieK from '../../images/contact/NatalieK.png'
import LeahZ from '../../images/contact/LeahZ.png'

const connectData = [
  {
    name: "Grace Tamisiea",
    major: "Food Science",
    position: "Director of External Operations",
    team: "Operations",
    email: "mailto:gmt59@cornell.edu",
    linkedin: "https://www.linkedin.com/in/gracetamisiea/",
    image: GraceT
  },
  {
    name: "Erin Huang",
    major: "Chemical Engineering",
    position: "Director of Internal Operations",
    team: "Operations",
    email: "mailto:eeh73@cornell.edu",
    linkedin: "https://www.linkedin.com/in/erinehuang/",
    image: ErinH
  },
  {
    name: "Frances Lach",
    major: "Information Science",
    position: "Team Lead",
    team: "Aquaculture",
    email: "mailto:fel9@cornell.edu",
    linkedin: "https://www.linkedin.com/in/frannielach/",
    image: FrannieL
  },
  {
    name: "Ryan Thompson",
    major: "Economics",
    position: "Team Lead",
    team: "ICN Policy",
    email: "mailto:rht57@cornell.edu",
    linkedin: "https://www.linkedin.com/in/ryanhthompson/",
    image: RyanT
  },
  {
    name: "Nelson Ooi",
    major: "Electrical and Computer Engineering",
    position: "Team Lead",
    team: "ARC",
    email: "mailto:no83@cornell.edu",
    linkedin: "https://www.linkedin.com/in/nelson-ooi-7b2786209/",
    image: NelsonO
  },
  {
    name: "Louisa Bjerke",
    major: "Environment & Sustainability",
    position: "Team Lead",
    team: "REAL",
    email: "mailto:lhb58@cornell.edu",
    linkedin: "https://www.linkedin.com/in/louisabjerke/",
    image: LouisaB
  },
  {
    name: "Dakota Caruso",
    major: "Int. Agriculture and Rural Dev.",
    position: "Team Lead",
    team: "Soil Factory",
    email: "mailto:bw368@cornell.edu",
    linkedin: "",
    image: DakotaC
  },
  {
    name: "Bonny Wong",
    major: "Design and Environmental Analysis",
    position: "Team Lead",
    team: "MarComm",
    email: "mailto:dlc328@cornell.edu",
    linkedin: "https://www.linkedin.com/in/bonnywong21/",
    image: BonnyW
  },
  {
    name: "Allan Murciano",
    major: "ORIE",
    position: "Finance Chair",
    team: "Operations",
    email: "mailto:am2223@cornell.edu",
    linkedin: "https://www.linkedin.com/in/allan-murciano-0561031a3/",
    image: AllanM
  },
  {
    name: "Akanksha Srivastava",
    major: "Environmental Engineering",
    position: "Operations Assistant",
    team: "Operations",
    email: "mailto:as2752@cornell.edu",
    linkedin: "https://www.linkedin.com/in/akanksha-srivastava-385631160/",
    image: AkankshaS
  },
  {
    name: "Ada Lian",
    major: "Environmental Engineering",
    position: "Co-Team Lead",
    team: "Solar Panel Reboot",
    email: "mailto:al894@cornell.edu",
    linkedin: "https://www.linkedin.com/in/ada-lian-59865017b/",
    image: AdaL
  },
  {
    name: "Carter Ellison",
    major: "Computer Science",
    position: "Co-Team Lead",
    team: "Aquaculture",
    email: "mailto:ckw23@cornell.edu",
    linkedin: "https://www.linkedin.com/in/carter-ellison/",
    image: CarterE
  },
  {
    name: "Elie Cole",
    major: "Bio. Sciences, Envr. & Sustainability",
    position: "Co-Team Lead",
    team: "Sustainable Smithsonian",
    email: "mailto:mkc232@cornell.edu",
    linkedin: "https://www.linkedin.com/in/mariela-cole-556b181a9/",
    image: ElieC
  },
  {
    name: "Nimra Shakoor",
    major: "Environmental Engineering",
    position: "Co-Team Lead",
    team: "REAL",
    email: "mailto:ns924@cornell.edu",
    linkedin: "https://www.linkedin.com/in/nimrashakoor/",
    image: NimraS
  },
  {
    name: "Naomi Koh",
    major: "Computer Science",
    position: "Team Lead",
    team: "Tech Ops",
    email: "mailto:nck23@cornell.edu",
    linkedin: "https://www.linkedin.com/in/naomikoh/",
    image: NaomiK
  },
  {
    name: "Jolie Wasserman",
    major: "AEM, Envr. & Sustainability",
    position: "Co-Team Lead",
    team: "Solar Panel Reboot",
    email: "mailto:jbw258@cornell.edu",
    linkedin: "https://www.linkedin.com/in/joliewasserman/",
    image: JolieW
  },
  {
    name: "Mia Millstein",
    major: "Applied Economics and Management",
    position: "Team Lead",
    team: "Currents",
    email: "mailto:mlm437@cornell.edu",
    linkedin: "https://www.linkedin.com/in/mia-millstein/",
    image: MiaM
  },
  {
    name: "Natalie Kelly",
    major: "Environment and Sustainability",
    position: "Co-Team Lead",
    team: "Sustainable Smithsonian",
    email: "mailto:nlk48@cornell.edu",
    linkedin: "https://www.linkedin.com/in/natalie-kelly-a291761ab/",
    image: NatalieK
  },
  {
    name: "Leah Zhao",
    major: "Chemical Engineering",
    position: "Operations Assistant",
    team: "Operations",
    email: "mailto:lzz3@cornell.edu",
    linkedin: "https://www.linkedin.com/in/leah-zhao-693991202/",
    image: LeahZ
  },
];
export default connectData;