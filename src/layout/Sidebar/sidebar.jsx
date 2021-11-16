import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { CssBaseline, Drawer, Hidden } from "@mui/material";
import renderContent from "./sideBarContent";

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const SidebarLayout = (props) => {
  const { isOpenSidebar, onCloseSidebar } = props;
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);  

  return (
    <React.Fragment>
      <CssBaseline />
      <RootStyle>
      {/* No Computador */}
        <Hidden initialWidth="lg" lgUp>
          <Drawer
            open={isOpenSidebar}
            onClose={onCloseSidebar}
            PaperProps={{
              sx: { 
                width: DRAWER_WIDTH 
                },
            }}
          >
            {renderContent}
          </Drawer>
        </Hidden>
        {/* No Celular */}
        <Hidden initialWidth="lg" lgDown>
          <Drawer
            open
            variant="persistent"
            PaperProps={{
              sx: {
                width: DRAWER_WIDTH,
                bgcolor: "background.default",
              },
            }}
          >
            {renderContent}
          </Drawer>
        </Hidden>
      </RootStyle>
    </React.Fragment>
  );
};

export default SidebarLayout;

SidebarLayout.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};