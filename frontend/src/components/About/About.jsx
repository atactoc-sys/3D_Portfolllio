import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>sample terxt to shoe</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1453209402635259904/6iVa5TxV_400x400.jpg"
            alt="Abhi"
            className="aboutAvatar"
          />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Saikat
          </Typography>
          <Typography>Full Stac Wrb Developer</Typography>
          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            I am passionate about coding
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            I am a dynamic and multifaceted individual with a passion for [your
            interests or areas of expertise]. With a curious mind and a thirst
            for knowledge, I constantly seek to explore new horizons and embrace
            opportunities for personal and professional growth. My journey
            through life has led me to develop a diverse set of skills and
            experiences. Whether .
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
