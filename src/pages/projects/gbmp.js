import React from 'react'
import Subteam from "../../components/projects/Subteam"
import gbmp1 from "../../images/project_photos/gbmp/gbmp1.jpg"
import gbmp2 from "../../images/project_photos/gbmp/gbmp2.jpg"
import gbmp3 from "../../images/project_photos/gbmp/gbmp3.jpg"
import gbmp_header from "../../images/project_photos/gbmp/gbmp-header.jpg"

const info = {
  mission: "By joining a dynamic metric with attention to consumer interaction and design, GBMP aims to redefine the sustainable metric and positively influence consumer behavior every day.",
  desc: [
    "The Green Building Metrics Project (GBMP) is a project focused on the design of a metric that will drive consumers to easily gauge how sustainable products and appliances are and allow them to make the most informed decisions about their purchases. The project seeks to drive sustainable consumer behavior by empowering consumers with specific, informative, and accurate data about the products they buy. In the conventional retail experience, consumers can easily walk into a store and gauge the appearance of a product or its initial cost, but consumers rarely have complete information about the life cycle cost, environmental impact, maintenance requirements, and safety of the product. This is where we come in.",
    "The GBMP team has created an indicator metric; a tool to measure and communicate these unseen components of a product in order to help solve the information deficit the traditional consumer is confronted with. The metric consists of four categories: well-developed formulas score products regarding cost and payback, environmental impact, maintenance and installation, and health and safety. The result is a visual indicator tag, designed to be applied to all products from building construction materials, to appliances and furnishings; essentially, any product that can be installed in a building.",
    "So far the team has worked to extract data from consumer reporting resources, develop mathematical formulas to indicate sustainability in the four categories, and design a consumer-friendly tag that effectively communicates the four metric indicators. Moving forward, the project aims to cement these aspects and validate the overall metric design in a real-world environment.",
    "In the coming months, the team seeks to test their results in closed experiments and partner with local retailers to assess the results in the field."
  ],
  title: "Green Building Metrics Project",
  title2: "Empowering consumers to make informed, sustainable purchases",
  parallax1: gbmp_header,
  parallax2: gbmp_header,
  images: [gbmp1, gbmp2, gbmp3],
  facts: []
}

export default function gbmp() {
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
        gbmp={true}
      />
    </div>
  )
}

