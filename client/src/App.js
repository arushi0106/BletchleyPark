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
import Dashboard from "./components/Dashboard/Dashboard.js";
import NewsFeed from "./components/Feed/NewsFeed.js";
import Leaderboard from "./components/Leaderboard/Leaderboard.js";
import HomePage from "./components/HomePage/HomePage.js";
import Compete from "./components/Compete/Compete.js";
import Contest from "./components/Compete/contest.js";
const ref = React.createRef();

const App = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/compete" element={<Compete />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/form" element={<Form />} />
          <Route path="/crossword" element={<MyCrossword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newsfeed" element={<NewsFeed />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
