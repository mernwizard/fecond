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

  console.log(expanded);
  return (
    <div className="accContainer">
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
                className={`Title ${
                  accordian.class === expanded && "activeHeader"
                }`}
                sx={{ width: "33%", flexShrink: 0 }}
              >
                {accordian.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ textAlign: "justify" }}>
                &emsp;&emsp;{accordian.name}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
