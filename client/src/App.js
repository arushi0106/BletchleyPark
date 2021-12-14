import React from "react";

import Crossword from "./components/crossword/Crossword.js";
import Navbar from "./components/Navbar.js";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Auth from './components/Auth/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "@material-ui/core";

const App = () => {
  // const classes = useStyles();
  const dancing = createTheme({
    typography: {
      fontFamily: ["Dancing Script", "cursive"].join(","),
    },
  });
//   return (
//     <React.Fragment>
//       <ThemeProvider theme={dancing}>
//         <Navbar />
//       </ThemeProvider>
//       <Crossword />
//     </React.Fragment>
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Crossword/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
    </Container>
    </BrowserRouter>

  );
};

export default App;
