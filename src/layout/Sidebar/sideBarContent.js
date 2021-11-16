import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import NavSection from "../../components/NavSections/navSections";
import Scrollbar from "../../components/ScrollBar/scrollBar";
import LogoSys from "../Header/Logo/logo";
import sideBarIcon from "./sideBarIcon";
import SideBarLS from "./sideBarLS";


const renderContent = (
  <Scrollbar
    sx={{
      height: "100%",
      "& .simplebar-content": {
        height: "100%",
        display: "flex",
        flexDirection: "column",
      },
    }}
  >
    <Box sx={{ px: 2.5, py: 3 }}>
      <Box sx={{ alignItems: "center" }}>
        <LogoSys />
      </Box>
        <Box sx={{ml: 4}}>
        <Typography variant="body2" >
          {"Acervo Virtual Municipal"}
        </Typography>
        </Box>
    </Box>

    <NavSection navConfig={sideBarIcon} />

    <Box sx={{ flexGrow: 1 }} />
    <SideBarLS />
  </Scrollbar>
);

export default renderContent;