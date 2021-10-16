import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.scss";
import { AccordianValue } from "../../../common";

export default function Accordian() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accContainer animate__animated animate__fadeInRight">
      {AccordianValue.map((accordian) => {
        return (
          <Accordion
            expanded={expanded === accordian.class}
            onChange={handleChange(accordian.class)}
            className="accWrapper"
            key={accordian.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                className="Title"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                {accordian.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{accordian.name}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
