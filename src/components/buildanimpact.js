import React from 'react'
import * as iconStyle from "./bai.module.css"

export default function bai({ children }) {
    return <div className={iconStyle.timelinerow}>{children}
        <h1 className={iconStyle.timelinelabel}>We Build Things That Make an Impact</h1>
        <div className={iconStyle.timeline}>
        <div className={iconStyle.timelinepoint}>
            <span className={iconStyle.year}>2009</span>
            <ul className={iconStyle.projects}>
                <li><a href="/projects/sd" className={iconStyle.label}>Solar Decathlon</a></li>
            </ul>
        </div>
        <div className={iconStyle.timelinepoint}>
            <span className={iconStyle.year}>2010</span>
            <ul className={iconStyle.projects}>
                <li><a href="/projects/ssa" className={iconStyle.label}>Schoolhouse South Africa</a></li>
                <li><a href="/projects/srf" className={iconStyle.label}>Sustainable Research Facility</a></li>
            </ul>
        </div>
        <div className={iconStyle.timelinepoint}>
            <span className={iconStyle.year}>2011</span>
            <ul className={iconStyle.projects}>
                <li>Interdisciplinary Sustainability Student Summit</li>
            </ul>
        </div>
        <div className={iconStyle.timelinepoint}>
            <span className={iconStyle.year}>2012</span>
            <ul className={iconStyle.projects}>
                <li><a href="/projects/snn" className={iconStyle.label}>Sustainable Neighborhoods Nicaragua</a></li>
            </ul>
        </div>
        <div className={iconStyle.timelinepoint}>
            <span className={iconStyle.year}>2013</span>
            <ul className={iconStyle.projects}>
                <li>Farm Pond Circle</li>
                <li><a href="/projects/blr" className={iconStyle.label}>Beebe Lake Redevelopment</a></li>
            </ul>
        </div>
        <div className={iconStyle.timelinepoint}>
            <span className={iconStyle.year}>2014</span>
            <ul className={iconStyle.projects}>
                <li>Inclusive School Haiti</li>
            </ul>
        </div>
        <div className={iconStyle.timelinepoint}>
            <span className={iconStyle.year}>2015</span>
            <ul className={iconStyle.projects}>
                <li><a href="/projects/ord" className={iconStyle.label}>Overlook Ridge Development</a></li>
            </ul>
        </div>
        <div className={iconStyle.timelinepoint}>
            <span className={iconStyle.year}>2016</span>
            <ul className={iconStyle.projects}>
                <li><a href="/projects/seg" className={iconStyle.label}>Sustainable Education Ghana</a></li>
            </ul>
        </div>
        <div className={iconStyle.timelinepoint}>
            <span className={iconStyle.year}>Now</span>
            <ul className={iconStyle.projects}>
                <li className="now__button"><a href="projects/" className="button">Current&nbsp;Projects</a></li>
            </ul>
        </div>
    </div>
</div>
}