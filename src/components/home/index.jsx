import React from "react";
import "./indedx.scss";
import MainImg from "../../assets/conveyer.gif";
import Particles from "react-particles-js";
import "animate.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
        className="particles"
      />
      <div className="container">
        <div className="textContainer">
          <h1 className="mainText animate__animated  animate__fadeInLeft">
            Power To Move Forward
          </h1>
          <h3 className="subText">
            Specialized in providing customized automation solutions for
            material handling
          </h3>
          <Link to="/about" className="getStartedBtn">
            Get Started &nbsp;
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <img src={MainImg} alt="" className="mainImg" draggable="false" />
        <div className="imgContainer">
          {/* <a href="https://www.freepik.com/vectors/design">
          Design vector created by pch.vector - www.freepik.com
        </a> */}
        </div>
      </div>
    </>
  );
};

export default Home;
