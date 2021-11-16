import React from "react";
import { Avatar, CssBaseline, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  accountAvatar: {
    cursor: "pointer",
    margin: "8px 0 8px 8px !important",
    backgroundColor: "inherit",
  },
});

const Account = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Chip
        icon={<Avatar className={classes.accountAvatar} />}
        variant="outlined"
        color="primary"
      />
    </React.Fragment>
  );
};

export default Account;
