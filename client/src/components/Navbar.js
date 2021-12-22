import React, { useState, useEffect } from "react";
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../constants/actionTypes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useStyles from "./styles";
import { teal, blue } from "@mui/material/colors";

const Navbar = () => {
  const classes = useStyles();
  const dancing = createTheme({
    typography: {
      fontFamily: ["Dancing Script", "cursive"].join(","),
    },
  });
  const whiteTheme = createTheme({
    palette: {
      primary: {
        main: teal[50],
      },
    },
  });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <Container>
      <AppBar position="absolute">
        <Toolbar className={classes.appBar}>
          <ThemeProvider theme={dancing}>
            <Typography
              className={classes.heading}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Bletchley Park
            </Typography>
          </ThemeProvider>
          {user?.result ? (
            <div className={classes.profile}>
              <ThemeProvider theme={whiteTheme}>
                <Button
                  color="inherit"
                  onClick={() => navigate("/dashboard")}
                  className={classes.button}
                >
                  Dashboard
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate("/feed")}
                  className={classes.button}
                >
                  Practice
                </Button>
                <Button
                  color="inherit"
                  onClick={logout}
                  className={classes.button}
                >
                  Compete
                </Button>
                <Button
                  color="inherit"
                  onClick={logout}
                  className={classes.button}
                >
                  Logout
                </Button>
              </ThemeProvider>
              <Avatar
                alt={user?.result.name}
                src={user?.result.imageUrl}
                sx={{ mr: 2 }}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              sx={{ mr: 2 }}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
