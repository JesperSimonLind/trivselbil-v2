import React from "react";
import images from "../../constants/images";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Reveal from "../Reveal/Reveal";

import "./Book.css";
const Book = () => {
  return (
    <>
      <div>
        <div className="book__wrapper">
          <Reveal>
            <h1 className="book__header">Boka in din service idag</h1>
            <a href="#kontakt">
              <Box display="flex" justifyContent="center">
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
              </Box>
            </a>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Book;
