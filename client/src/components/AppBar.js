import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Toolbar, Typography, AppBar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity: 0.8,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: 20,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar align="center">
          <Typography variant="h3" className={classes.title}>
            Video Conversion Tool
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
