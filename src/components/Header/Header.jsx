import React from "react";
import Button from "@mui/material/Button";
import Reveal from "../Reveal/Reveal";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div
        className="app__header app__wrapper header__padding app__bg"
        id="hem"
      >
        <div className="app__wrapper_info">
          <Reveal>
            <p className="p__opensans">Välkommen till Trivselbil AB</p>
            <h1 className="app__header-h1">
              Din bilverkstad i{" "}
              <span style={{ color: "var(--color-orange)" }}>Tullinge</span>
            </h1>

            <p className="p__opensans">
              Trivselbil tar hand om din bil och lämnar en nästan ny tillbaka
            </p>
            <a href="#kontakt">
              <Button
                className="header__button"
                variant="contained"
                size="large"
                sx={{
                  marginTop: "16px",
                  borderRadius: "20px",
                  fontFamily: "var(--font-base)",
                  backgroundColor: "var(--color-orange)",
                  fontWeight: 600,
                  ":hover": {
                    bgcolor: "#B9551B",
                  },
                }}
              >
                Kontakta oss
              </Button>
            </a>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Header;
