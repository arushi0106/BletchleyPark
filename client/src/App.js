import React from "react";
import Pdf from "react-to-pdf";
import ReactToPdf from "react-to-pdf";
import Crossword from "./components/crossword/Crossword.js";
import Navbar from "./components/Navbar.js";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Form from "./components/Form/Form.js";
import useStyles from "./components/crossword/styles";
import MyCrossword from "./components/crossword/finalcross.js";
import Newsfeed from "./components/newsfeed/Newsfeed"
import Dashboard from "./components/Dashboard/Dashboard.js";
const ref = React.createRef();

const App = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/crossword" element={<MyCrossword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
