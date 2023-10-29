import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import "./Contact.css";
import Reveal from "../Reveal/Reveal";
const Contact = () => {
  return (
    <div className="contact__wrapper about__padding" id="kontakt">
      <Reveal>
        <Stack
          flexDirection="column"
          sx={{
            justifyContent: "space-evenly",
            marginTop: "80px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BsFillTelephoneFill className="contact__icons" />
            <p className="contact__info_title">Ring</p>
            <a className="contact__info" href="tel:08-777 09 91">
              08-778 40 45
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "24px",
            }}
          >
            <FaMapMarkerAlt className="contact__icons" />
            <p className="contact__info_title">Besöksadress</p>
            <p className="contact__info">Trivselbil AB</p>
            <p className="contact__info">Sadelmakarvägen 11B, Box 534</p>
            <p className="contact__info">146 33 Tullinge</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "24px",
            }}
          >
            <GrMail className="contact__icons" />
            <p className="contact__info_title">E-post</p>
            <a className="contact__info" href="mailto: info@trivselbil.se">
              info@trivselbil.se
            </a>
          </Box>
        </Stack>
      </Reveal>
      <div className="open__box">
        <Reveal>
          <h3 className="contact__info_title">ÖPPETTIDER</h3>
        </Reveal>
        <Reveal>
          <Stack
            flexDirection="row"
            sx={{
              justifyContent: "center",
            }}
          >
            <Box mr={1.5}>
              <p className="contact__info_time">Måndag - Torsdag:</p>
              <p className="contact__info_time">Fredag:</p>
              <p className="contact__info_time">Lördag - Söndag:</p>
              <p className="contact__info_time">Lunch:</p>
            </Box>
            <Box>
              <p className="contact__info_time">08:00 - 17:00</p>
              <p className="contact__info_time">08:00 - 15:10</p>
              <p className="contact__info_time">Stängt</p>
              <p className="contact__info_time">10:30 - 11:15</p>
            </Box>
          </Stack>
        </Reveal>
      </div>
      <Reveal>
        <div className="map__box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8168.672884218261!2d17.906846031577683!3d59.213203042930125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7101732b7da1%3A0x78cde4d469c6badc!2sTrivselbil!5e0!3m2!1ssv!2sse!4v1698178063018!5m2!1ssv!2sse"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
