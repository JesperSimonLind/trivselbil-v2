import React from "react";
import Button from "@mui/material/Button";
import Reveal from "../Reveal/Reveal";

import "./Middle.css";

const Middle = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "black" }}
        // className="app__header app__wrapper header__padding app__bg"
      >
        <div className="app__wrapper_middle">
          <Reveal>
            <h1 className="app__middle-h1">I bilens tjänst sedan 1989</h1>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Middle;
