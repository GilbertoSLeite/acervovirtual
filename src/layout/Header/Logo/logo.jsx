import { ButtonBase } from "@mui/material";
import React from "react";
import logo from "../../../assets/Images/Logo/amargosa.png";

const LogoSys = () => {
  return (
    <React.Fragment>
      <ButtonBase>
        <img src={logo} alt="LS" width="150" />
      </ButtonBase>
    </React.Fragment>
  );
};

export default LogoSys;
