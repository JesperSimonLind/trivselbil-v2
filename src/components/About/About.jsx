import React from "react";
import images from "../../constants/images";
import Grid from "@mui/material/Grid";

import "./About.css";
import Reveal from "../Reveal/Reveal";

const About = () => {
  return (
    <>
      <div className="about__wrapper about__padding" id="om">
        <Reveal>
          <h2 className="about__header">Vilka är vi?</h2>
        </Reveal>
        <Reveal>
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className="about__text">
                <p className="about__p" style={{ marginBottom: "65px" }}>
                  Välkommen till Trivselbil, din långvariga följeslagare inom
                  fordonsvård och försäljning i Stockholm! Vi började vår resa i
                  Tullinge för nästan 30 år sedan och har sedan dess betjänat
                  ett brett spektrum av kunder – från entusiastiska
                  privatpersoner till pålitliga återförsäljare och företag.
                </p>
                <p className="about__p" style={{ marginBottom: "65px" }}>
                  Vårt hjärta klappar fortfarande för bilar, och vi är stolta
                  över att hålla fast vid vårt ursprung, alltid med samma
                  passion och kvalitet i fokus.
                </p>
                <p className="about__p">
                  På Trivselbil är vi stolta över att vara miljömedvetna och
                  engagerade i att minska vår påverkan på planeten. Vår strävan
                  efter kundnöjdhet och hållbarhet driver oss framåt. Välkommen
                  till Trivselbil, där ditt fordon tas om hand med omsorg och
                  kärlek. <br />/ Vänliga hälsningar vi på Trivselbil
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="about__image">
                <img src={images.about} alt="En bild på ett tvätteri" />
              </div>
            </Grid>
          </Grid>
        </Reveal>
      </div>
    </>
  );
};

export default About;
