import React, { useState } from "react";
import "./index.scss";
import illustration from "../../assets/contactUs.jpg";
import emailjs from "emailjs-com";
import { Grid, TextField, Button } from "@mui/material";

const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  const handleSubmit = (e) => {
    setShowContact(true);
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "Gmail",
    //     "template_ygfdskc",
    //     e.target,
    //     "user_uwo13RmLv8r6KGeFGTO0o"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // console.log(e.target);
    e.target.reset();
  };

  return (
    <div className="contactContainer">
      {showContact && (
        <div className="addressContainer animate__animated animate__fadeInLeft">
          <h1>Contact</h1>
          <div className="address">
            <p>+91 422 605 8885; +91 422 655 8886 </p>
            <p>info@fecond.in</p>
            <p>
              Fecond Industrial Solutions <br /> No. 171/4, Narayana Avenue,
              Krishna Colony,
              <br /> Trichy Road, Singanallur PO,
              <br /> Coimbatore — 641 005, Tamil Nadu, India
            </p>
          </div>
        </div>
      )}
      {!showContact && (
        <div className="formContainer animate__animated animate__fadeInLeft">
          <h1>
            Get in <br />
            <span>Touch</span>
          </h1>
          <form onSubmit={handleSubmit} className="form">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Name"
                  name="name"
                  variant="outlined"
                  className="textField"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="standard-basic"
                  type="email"
                  label="Email"
                  name="email"
                  variant="outlined"
                  className="textField"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="standard-basic"
                  type="number"
                  label="Mobile Number"
                  name="mobileNumber"
                  variant="outlined"
                  className="textField"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  className="textField"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Write Something Here..."
                  name="message"
                  variant="outlined"
                  className="textField"
                  inputProps={{
                    style: {
                      fontFamily: "nunito",
                      color: "white",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit" className="btn">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      )}
      <div className="illustrationContainer">
        <img
          src={illustration}
          alt="contact illustration"
          className="illustration"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Contact;
