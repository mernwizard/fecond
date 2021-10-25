import React from "react";
import Accordian from "./accordian";
import "./index.scss";
import bgIllustration from "../../assets/conveyorcards/10 why about us.jpg";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="accordianContainer">
        <div className="imgWrapper">
          <p>
            &emsp; &emsp;Fecond™ design and implement flexible
            productivity-enhancing, efficiency-increasing, and cost-effective
            solutions for materials movement, storage, and handling in unison
            with our customers. We help define your objectives, then show you
            ways to meet them. Being your steadfast partner in a side-by-side,
            working relationship is the only way we know how to do business.
          </p>
          <div className="imageContainer">
            <img src={bgIllustration} alt="" />
          </div>
        </div>
        <div className="accordianWrapper">
          <Accordian />
        </div>
      </div>
    </div>
  );
};

export default About;
