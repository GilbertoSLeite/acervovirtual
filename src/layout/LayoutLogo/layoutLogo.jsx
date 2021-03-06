import { Link as RouterLink, Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import LogoSys from "../Header/Logo/logo";

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: "100%",
  position: "absolute",
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

const LayoutLogo = () => {
  return (
    <>
      <HeaderStyle>
        <RouterLink to="/">
          <LogoSys />
        </RouterLink>
      </HeaderStyle>
      <Outlet />
    </>
  );
};

export default LayoutLogo;
