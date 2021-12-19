import React from "react";
import {
  Container,
  Grid,
  Button,
  Box,
  ButtonGroup,
  CssBaseline,
} from "@mui/material";
import useStyles from "./styles";
const Dashboard = () => {
  const classes = useStyles();
  const buttons = [
    <Button key="one">Create</Button>,
    <Button key="two">Join</Button>,
    <Button key="three">Compete</Button>,
  ];
  return (
    <Grid
      container
      alignItems="stretch"
      spacing={3}
      className={classes.container}
    >
      <Grid item>
        <Box
          sx={{
            display: "flex",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
            size="large"
          >
            {buttons}
          </ButtonGroup>
        </Box>
      </Grid>
      <Grid item xs={8} className={classes.vertical}>
        Main
      </Grid>
      <Grid item xs={2}>
        RightSideBar
      </Grid>
    </Grid>
  );
};

export default Dashboard;
