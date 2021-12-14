import React from "react";
import Crossword from "./components/crossword/Crossword";
import Auth from './components/Auth/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "@material-ui/core";
const App = () => {
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
