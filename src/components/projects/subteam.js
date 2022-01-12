import * as React from "react"
import { useState } from "react"
import CarouselComp from "./carousel.js"
import "../about/about.scss"
import * as iconStyle from "./subteambody.module.css"
import Footer from '../footer/Footer'
import { Link } from "gatsby"
import Parallax from "../parallax/parallax.js"
import Connectwithus from '../footer/connectwithus'
import Nav from '../navbar/nav'
import CytoscapeComponent from 'react-cytoscapejs';




export default function Subteam({ parallax1, title, title2, mission, desc, parallax2, images, facts }) {

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
            <Parallax image={parallax1} caption={title} caption2={title2} height={400}> </Parallax>
            <div className={iconStyle.gray}>
                <h1 className={iconStyle.header}>Our Mission</h1>
                <p className={iconStyle.para}>{mission}</p>
            </div>
            <div className={iconStyle.white}>
                {desc.map((para, index) =>
                    <p className={iconStyle.para} key={index}>{para}</p>
                )}
            </div>
            <CarouselComp images={images} />
            <div className={iconStyle.cytoscapeContainer}>
                {elements.map((element, index) =>
                    <div>
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
                                        shape: 'round-hexagon'
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
            <Parallax image={parallax2} height={200}> </Parallax>
            <Footer />
            <Connectwithus />
        </main>
    )
}
