import * as React from "react"
import CarouselComp from "./carousel.js"
import "../about/about.scss"
import * as iconStyle from "./subteambody.module.css"
import Footer from '../footer/Footer'
import Parallax from "../parallax/parallax.js"
import Connectwithus from '../footer/connectwithus'
import Nav from '../navbar/nav'
import CytoscapeComponent from 'react-cytoscapejs';
import SolarizeChart from './solarizeChart'


/**
 * @param {parallax1} parallax1 the top parallax image
 * @param {title} title name of the subteam
 * @param {title2} title2 description or elaboration on name of subteam
 * @param {mission} mission the subteam's mission statement
 * @param {desc} desc a list of paragraphs describing the subteam
 * @param {parallax2} parallax2 the bottom parallax image
 * @param {images} images list of images to be displayed in carousel
 * @param {facts} facts list of facts to be displayed in graphic format
 * @param {map} map whether to display the map 
 * @param {currents} currents whether this subteam is currents
 * @param {solarize} solarize whether this subteam is solarize
 * @param {seg} seg whether this subteam is seg
 * @param {gbmp} gbmp whether this subteam is gbmp
 * @param {logo} logo is a subteam's logo 
 */
export default function Subteam({ parallax1, title, title2, mission, desc, parallax2, images, facts, map, currents, solarize, seg, gbmp, logo }) {
    const elements = []

    for (let i = 0; i < facts.length; ++i) {
        const element = facts[i];
        elements.push([
            { data: { id: 'one', parent: 'parentId', label: 'Node 1', type: 'center' }, position: { x: 0, y: 0 } }
        ]);
        for (let j = 0; j < element.number; j++) {
            elements[i].push(
                {
                    data: { id: j.toString(), label: '', type: 'other' }, position: { x: 100, y: j * 10 }
                }
            );
            elements[i].push(
                {
                    data: { source: j.toString(), target: 'one', label: '' }
                }
            )
        }
    }

    return (
        <main>
            <Nav />
            <Parallax image={parallax1} caption={title} caption2={title2} height={500}> </Parallax>
            <div className={iconStyle.gray}>
                <div className={iconStyle.grayheader}>
                    <h1 className={iconStyle.header}>Ouzz Mission</h1>
                    <img className={iconStyle.logostyle} src={logo} alt="img not found"></img>
                </div>
                <div>
                    <p style={{ color: 'grey' }}>______________</p>
                    <p className={iconStyle.para}>{mission}</p>
                </div>
            </div>
            <div className={iconStyle.white}>
                {desc.map((para, index) =>
                    <p className={iconStyle.para} key={index}>{para}</p>
                )}
            </div>
            {seg &&
                <>
                    <div>
                        <iframe className={iconStyle.segVideo} title="seg-video" src="https://player.vimeo.com/video/159445965?h=6c2f7d0eef" width="640" height="360" frameborder="0" allowfullscreen>
                        </iframe>
                    </div>
                    <div className={iconStyle.segQuote}>
                        "Sustainable design structures include rainwater capture, parabolic solar panels with thermal mass storage, Biodigestor, porous pavement and riparian buffering."  - Claudia Nielsen, Project Director
                    </div>
                </>

            }
            {gbmp &&
                <div className={iconStyle.segQuote}>
                    "By focusing on making everyday purchases more sustainable, the GBMP team can have an impact far beyond simply creating a single sustainable project."  - Alex Parkurst, Former Team Lead
                </div>
            }

            {map &&
                <div >
                    <iframe
                        src="https://cusd-sustainable-education.herokuapp.com"
                        className={iconStyle.map}
                        title="map"
                    >
                    </iframe>
                </div>
            }
            {currents &&
                <iframe
                    className={iconStyle.currentsChart}
                    src="https://currents-visualization.herokuapp.com"
                    title='currents-chart'
                >
                </iframe>
            }
            {solarize &&
                <>
                    <p className={iconStyle.solarizeQuote}>
                        We were recently featured in a
                        <a href="https://news.cornell.edu/stories/2020/09/unplugged-students-build-green-trailer-energize-tools" target="_blank" rel="noreferrer"> Cornell Chronicle article</a>
                        , as well as in
                        <a href="https://sustainablecampus.cornell.edu/annualreport2020#campus_operations" target="_blank" rel="noreferrer"> Cornell's '2019-2020 Sustainability Report'.</a>
                    </p>
                    <div className={iconStyle.solarizeChart} >
                        <SolarizeChart />
                    </div>
                    <div className={iconStyle.solarizeCaption}>
                        Cornell's goal is to reduce carbon emissions to 0 by 2035. The graph shows changes in CO2 emissions since 2008. <a href="https://sustainablecampus.cornell.edu/our-leadership/cap/ghg-inventory" rel="noreferrer" target="_blank">(source)</a>
                    </div>
                </>
            }
            {images.length > 0 && <CarouselComp images={images} />}
            <div>
                {typeof window !== 'undefined' && facts.length > 0 &&
                    <div className={iconStyle.cytoscapeContainer}>
                        {elements.map((element, index) =>
                            <div className={iconStyle.graphicDiv}>
                                <div className={iconStyle.metric} style={{ color: `${facts[index].color}` }}>{facts[index].metric}:</div>
                                <div className={iconStyle.number} style={{ color: 'white', backgroundColor: `${facts[index].color}` }}>{facts[index].numberLabel}</div>
                                <CytoscapeComponent key={index} elements={element} className={iconStyle.cytoscape}
                                    userPanningEnabled={false}
                                    userZoomingEnabled={false}
                                    layout={{
                                        name: 'concentric',
                                        fit: true,
                                        padding: 10
                                    }}
                                    stylesheet={[
                                        {
                                            selector: 'node[type="center"]',
                                            style: {
                                                'background-color': `${facts[index].color}`,
                                                width: '20px',
                                                height: '20px',
                                                'background-image': `url(${facts[index].background})`,
                                                'background-fit': 'cover'
                                            }
                                        },
                                        {
                                            selector: 'node[type="other"]',
                                            style: {
                                                'background-color': `${facts[index].color}`,
                                                width: '90px',
                                                height: '90px',
                                                'border-width': '1px',
                                                'border-color': 'black',
                                                shape: 'round-hexagon',
                                            }
                                        },
                                        {
                                            selector: 'edge',
                                            style: {
                                                opacity: '0.5',
                                                width: '1px'
                                            }
                                        }
                                    ]}
                                />
                            </div>
                        )}
                    </div>
                }
            </div>
            <Parallax image={parallax2} height={200}> </Parallax>
            <Footer />
            <Connectwithus />
        </main>
    )
}
