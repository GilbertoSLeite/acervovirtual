import { NotificationImportantOutlined } from "@material-ui/icons";
import { Avatar, ButtonBase, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const useStyles = makeStyles({
  box: {
    marginLeft: "16px",
    marginRight: "16px",
  },
  notificationAvatar: {
    backgroundColor: "inherit",
  },
});

const Notification = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Box component="span" className={classes.box}>
        <ButtonBase sx={{ borderRadius: "12px" }}>
          <Avatar variant="circular" className={classes.notificationAvatar}>
            <NotificationImportantOutlined color="action" />
          </Avatar>
        </ButtonBase>
      </Box>
    </React.Fragment>
  );
};
export default Notification;
