import React,{useState,useEffect} from "react";
import { AppBar, Container, Typography,Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../constants/actionTypes';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  const dancing = createTheme({
    typography: {
      fontFamily: ["Dancing Script", "cursive"].join(","),
    },
  });
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  console.log(user);
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  return (
    <ThemeProvider theme={dancing}>
      <Container>
        <AppBar className={classes.appBar}>
          <Typography className={classes.heading} variant="h5">
            Bletchley-Park
          </Typography>
          <Toolbar className={classes.toolbar}>
        {
        user?.result ? (
          <div  className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
             <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
};

export default Navbar;
