import React from "react";

import Crossword from "./components/crossword/Crossword.js";
import Navbar from "./components/Navbar.js";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Form from "./components/Form/Form.js";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Navbar />
                <Form />
                {/* <Crossword /> */}
              </React.Fragment>
            }
          />
          <Route
            path="/crossword"
            element={
              <React.Fragment>
                <Navbar />
                {/* <Form /> */}
                <Crossword />
              </React.Fragment>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
