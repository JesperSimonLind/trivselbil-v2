import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GiAutoRepair, GiCarWheel } from "react-icons/gi";
import { FaTrailer } from "react-icons/fa";
import { BiSolidCarWash } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";

import "./Services.css";
import Reveal from "../Reveal/Reveal";
import { Link, Divider } from "@mui/material";

const Services = () => {
  return (
    <>
      <div className="services__wrapper section__padding" id="tjanster">
        <Reveal>
          <h2 className="services__header" style={{ marginBottom: "32px" }}>
            Våra Tjänster
          </h2>
        </Reveal>
        <Reveal>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  "&:hover .services__icons": {
                    color: "var(--color-orange)",
                    transform: "scale(1.2)",
                  },
                }}
              >
                <GiAutoRepair className="services__icons" />
                <p className="service__title">Bilservice</p>
                <p className="service__p">
                  Vi är kapabla till att utföra de flesta arbeten inom
                  bilservice och vi jobbar med alla bilmärken.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  "&:hover .services__icons": {
                    color: "var(--color-orange)",
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Divider />
                <FaTrailer className="services__icons" />
                <p className="service__title">Släpvagnar</p>
                <p className="service__p">
                  Är du trött på att ständigt behöva köra till macken för att
                  hyra ett släp när du ska köra till tippen?
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  "&:hover .services__icons": {
                    color: "var(--color-orange)",
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Divider />
                <BiSolidCarWash className="services__icons" />
                <p className="service__title">Bilvård</p>
                <p className="service__p">
                  Rekonditionering är långt ifrån en vanlig rengöring, den
                  återställer och förnyar på djupet
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  "&:hover .services__icons": {
                    color: "var(--color-orange)",
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Divider />
                <GiCarWheel className="services__icons" />
                <p className="service__title">Däckservice</p>
                <p className="service__p">
                  Vi erbjuder omfattande stöd för alla dina däckbehov, så att du
                  kan känna dig trygg på vägarna.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  "&:hover .services__icons": {
                    color: "var(--color-orange)",
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Divider />
                <IoDiamondOutline className="services__icons" />
                <p className="service__title">Lackskydd</p>
                <p className="service__p">
                  Hör av dig till oss så hittar vi det lackskyddet och den
                  behandling som passar just din bil bäst.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Reveal>
      </div>
    </>
  );
};

export default Services;
