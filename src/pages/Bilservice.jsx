import { Button, Box } from "@mui/material";
import React from "react";
import Reveal from "../components/Reveal/Reveal";
import { GiAutoRepair } from "react-icons/gi";
import Book from "../components/Book/Book";

import "./Bilservice.css";

const Bilservice = () => {
  return (
    <>
      <div className="about__wrapper about__padding" id="om">
        <Button sx={{ color: "white", fontFamily: "var(--font-base)" }}>
          Tillbaka
        </Button>
        <Reveal>
          <Box display="flex" justifyContent="center" alignItems="center">
            <GiAutoRepair
              className="services__icons"
              style={{ color: "var(--color-orange)" }}
            />
            <h2 className="service__title">Bilservice</h2>
          </Box>
        </Reveal>
        <Reveal>
          <Box display="flex" justifyContent="center">
            <div className="about__text">
              <p className="bilservice__p">
                Vi är kapabla till att utföra de flesta arbeten inom bilservice
                och vi jobbar med alla bilmärken.
              </p>
              <p className="bilservice__p">Exempel på bilservice:</p>
              <p className="bilservice__p">
                glödlampor, torkarblad, olja och filter, batteri, bromsar,
                koppling, m.m..
              </p>
              <p className="bilservice__p">
                Vi monterar även extrautrustning som: dragkrok, extraljus
                (LED-ramp), billarm m.m..
              </p>
              <p className="bilservice__p">
                Ring 087784045 eller kom förbi oss i Tullinge för tidsbokning
                och prisuppgifter.
              </p>
              <p className="bilservice__p">
                Inget jobb är för stort eller för litet. Passa även på att boka
                in bilen för tvätt i samband med service.
              </p>
            </div>
          </Box>
        </Reveal>
      </div>
      <Book />
    </>
  );
};

export default Bilservice;
