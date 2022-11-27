import React, { useState } from "react";
import "../about/about.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./stories.scss";

const Overview = ({ image1 }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="page-container">
      <div className="accordion-container">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className="accord"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="accord-contents">
              <img src={image1} width={140} height={200} className="image1" />
              <div className="accord-title">
                <h1> Jeremy Blum </h1>
                <h5>
                  <i> One of CUSD's original founders </i>
                </h5>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <iframe
                width="100%"
                height="500px"
                frameborder=""
                title="vimeo-player"
                src="https://player.vimeo.com/video/126048968?h=e6aab752ec"
                allowfullscreen
              ></iframe>
              <Typography variant="h5" className="video-caption">
                Stay tuned for Founding History, a story about one of CUSD's
                original founders, Jeremy Blum, and his amazing insights on the
                journey that made the organization what it is today.
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className="accord"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="accord-contents">
              <img src={image1} width={140} height={200} className="image1" />
              <div className="accord-title">
                <h1> Account #1 </h1>
                <h5>
                  <i> Description of Title </i>
                </h5>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h5">
              PUT QUOTE HERE:
              <q>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </q>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className="accord"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="accord-contents">
              <img src={image1} width={140} height={200} className="image1" />
              <div className="accord-title">
                <h1> Account #2 </h1>
                <h5>
                  <i> Description of Title </i>
                </h5>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h5">
              PUT QUOTE HERE:
              <q>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </q>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          className="accord"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="accord-contents">
              <img src={image1} width={140} height={200} className="image1" />
              <div className="accord-title">
                <h1> Account #3 </h1>
                <h5>
                  <i> Description of Title </i>
                </h5>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h5">
              PUT QUOTE HERE:
              <q>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </q>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Overview;
