import React from 'react'
import Subteam from "../../components/projects/Subteam"
import seg1 from "../../images/project_photos/seg/seg1.jpg"
import seg2 from "../../images/project_photos/seg/seg2.jpg"
import seg3 from "../../images/project_photos/seg/seg3.jpg"
import seg_header from "../../images/project_photos/seg/seg-header.png"
import seg_header2 from "../../images/project_photos/seg/seg-header2.jpg"

const info = {
  mission: "In a partnership introduced by recent Cornell alumni, CUSD is joining forces with Voices of African Mothers (VAM) to work on the development of a sustainable education center for girls that will service villages outside of Sogakope, Ghana, as well as students from all over West Africa.",
  desc: [
    "This school will be designed by graduate and undergraduate students at Cornell, and will be built by Cornell students working with local contractors. Through an empathetic research process and continual community engagement, this school will be technologically advanced and self-sustaining while still representing African architecture and the desires of the community. The idea is to create a place that not only helps girls build their future, but teach them how to contribute back to their own communities, invest in their own educational system, and provide a space where they feel appreciated and safe.",
    "Over the past several months, members of CUSD have been working with an NGO called Voices of African Mothers (VAM) to develop the vision for VAM Village, a self-sustaining girls' campus in Sogakope, Ghana. The vision for VAM Village is an ecological educational center that will draw people in from all over Ghana to promote and support women's empowerment. Its plans include schooling for girls from nursery through junior high school, conference centers, and farmland. CUSD aims to design and construct a multi-purpose academic building for this campus. Our design for the school will address the social, environmental, and cultural concerns of the people that occupy it.",
    "There is enormous potential with this project to drastically improve the quality of life for girls in need of a supportive educational environment. The students that will attend this school will be girls from regions of Ghana and Togo where opportunities for quality schooling are limited. In addition to the paramount importance of having a nurturing community and strong education, VAM Village will serve as an emblem of sustainability to a region that has yet to make sustainable practices the norm.",
    "We are committed to designing spaces that promote a strong community and offer an enjoyable and fulfilling experience for both students and teachers. Through use of color, communal gardens, and open classroom layout, we hope to achieve an environment that engages students and encourages active participation within the VAM Village community. The VAM Girls Academy will not only provide girls with access to quality education, but will empower young women to recognize and appreciate their potential.",
    "The site for VAM Village is approximately 200 acres and rests along the Volta River in Sogakope, Ghana. In addition to its academic purpose, roughly 100 acres of the site will be designated for farming and agricultural projects. VAM Village will be an ecological hub where students can learn to farm and understand the meaning of sustainability by growing and using their own produce. We intend to build the school using locally sourced materials, alternative energy technologies, and passive energy systems. This will not only reduce the school's carbon footprint, but will enable it to serve as a model of ecological sustainability for the region."
  ],
  title: "Sustainable Education Ghana",
  title2: "CUSD x Voices of African Mothers",
  parallax1: seg_header,
  parallax2: seg_header,
  images: [seg1, seg2, seg3],
  facts: [
    {
      number: 200,
      numberLabel: '200',
      metric: 'Number of Acres',
      color: '#22a84a'
    },
    {
      number: 5,
      numberLabel: '5',
      metric: 'Undergrad Colleges Represented',
      color: '#12a38d'
    },
    {
      number: 9,
      numberLabel: '9',
      metric: 'System Engineers',
      color: '#02664b'
    }
  ]
}

export default function seg() {
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

