import React from "react";
import Crossword from "./components/crossword/Crossword.js";
import Navbar from "./components/Navbar.js";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const App = () => {
  // const classes = useStyles();
  const dancing = createTheme({
    typography: {
      fontFamily: ["Dancing Script", "cursive"].join(","),
    },
  });
  return (
    <React.Fragment>
      <ThemeProvider theme={dancing}>
        <Navbar />
      </ThemeProvider>
      <Crossword />
    </React.Fragment>
  );
};

export default App;
