import React from 'react'
import styled from 'styled-components'
import * as iconStyle from "./bai.module.css"

export default function bai() {

    const data = [
        [{
            date: "2009",
            link: "/projects/sd",
            name: "Solar Decathlon"
        }],
        [{
            date: "2010",
            link: "/projects/ssa",
            name: "Schoolhouse South Africa"
        },
        {
            date: "2010",
            link: "/projects/srf",
            name: "Sustainable Research Facility"
        }],
        [{
            date: "2011",
            link: "",
            name: "Interdisciplinary Sustainability Student Summit"
        }],
        [{
            date: "2012",
            link: "/projects/snn",
            name: "Sustainable Neighborhoods Nicaragua"
        }],
        [{
            date: "2013",
            link: "",
            name: "Farm Pond Circle"
        },
        {
            date: "2013",
            link: "/projects/blr",
            name: "Beebe Lake Redevelopment"
        }],
        [{
            date: "2014",
            link: "",
            name: "Inclusive School Haiti"
        }],
        [{
            date: "2015",
            link: "/projects/ord",
            name: "Overlook Ridge Development"
        }],
        [{
            date: "2016",
            link: "/projects/seg",
            name: "Sustainable Education Ghana"
        }],
        [{
            date: "Now",
            link: "projects/",
            name: "Current Projects"
        }],
    ]

    return (
        <div className={iconStyle.timelinerow} style={{ "paddingBottom": "100px" }}>
            <h1 className={iconStyle.timelinelabel}>We Build Things That Make an Impact</h1>
            <div className={iconStyle.timeline}>
                {data.map((d, idx) => {
                    if (d.length >= 2) {
                        return (
                            <>
                                <div key={idx} className={iconStyle.elements}>
                                    <span>
                                        <div className={iconStyle.year}>{d[0].date}</div>
                                        <ul className={iconStyle.projects}>
                                            <li className={iconStyle.project}><a href={d[0].link} className={iconStyle.label}>{d[0].name}</a></li>
                                        </ul>
                                        <div>
                                            <ul className={iconStyle.projects}>
                                                <li className={iconStyle.project}><a style={{ "paddingTop": "70px" }} className={iconStyle.label} href={d[1].link} >{d[1].name}</a></li>
                                            </ul>
                                        </div>
                                        <div className={iconStyle.timelinepoint}></div>
                                    </span>

                                </div>

                            </>

                        )
                    }
                    else {
                        return (
                            <>
                                <span>
                                    <div key={idx} className={iconStyle.elements}>
                                        <div className={iconStyle.year}>{d[0].date}</div>
                                        <ul className={iconStyle.projects}>
                                            <li className={iconStyle.project}><a href={d[0].link} className={iconStyle.label}>{d[0].name}</a></li>
                                        </ul>
                                        <div className={iconStyle.timelinepoint}></div>
                                    </div>
                                </span>
                            </>
                        )
                    }
                })}
            </div >
        </div >
    )
}