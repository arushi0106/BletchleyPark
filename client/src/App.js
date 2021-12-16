import React from "react";
import Pdf from "react-to-pdf";
import ReactToPdf from "react-to-pdf"
import Crossword from "./components/crossword/Crossword.js";
import Navbar from "./components/Navbar.js";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Form from "./components/Form/Form.js";
const ref = React.createRef();
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
                {/* <Navbar /> */}
                {/* <Form /> */}
                
                
                <ReactToPdf targetRef={ref} filename="crossword.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
    <div ref={ref}>
    <Crossword />
    </div>
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
