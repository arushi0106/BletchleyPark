import React from "react";
import Pdf from "react-to-pdf";
import ReactToPdf from "react-to-pdf"
import Crossword from "./components/crossword/Crossword.js";
import Navbar from "./components/Navbar.js";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import { Container } from "@material-ui/core";
import Form from "./components/Form/Form.js";
const ref = React.createRef();
const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
      <Navbar />
      <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                
                <Form />
                {/* <Crossword /> */}
              </React.Fragment>
            }
          />
          <Route
            path="/crossword"
            element={
              <React.Fragment>
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
          {/* <Route path="/auth" exact component={() => (!user ? <Auth /> : <Navigate to="/" />)} /> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
