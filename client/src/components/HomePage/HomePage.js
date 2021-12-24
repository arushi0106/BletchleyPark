import { Container, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "../styles";
import create from "../../images/create.png";
import practice from "../../images/practice.jpg";
import compete from "../../images/compete.png";
import friends from "../../images/friends.jpg";
import MainText from "./MainText";
import AOS from "aos";
import "aos/dist/aos.css";
const HomePage = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Container className={classes.container}>
        <MainText
          variant="h1"
          text="Welcome to Bletchley Park"
          className={classes.special}
        />
      </Container>
      <Container className={classes.container}>
        <MainText variant="h5" text="Scroll to know what all you can do here" />
      </Container>

      <Container className={classes.container}>
        <MainText
          variant="h5"
          text="1. Create your own crosswords, using your words and your own clues.
"
        />

        {/* <img data-aos="fade-up-right" src={create} className={classes.avatar} /> */}
      </Container>

      <Container className={classes.container}>
        <MainText
          variant="h5"
          text="2. Hone your crossword skills by practicing all the crosswords ever
          made here."
        />

        {/* <img data-aos="fade-up-right" src={practice} /> */}
      </Container>

      <Container className={classes.container}>
        <MainText
          variant="h5"
          text="3. Compete with all the users in our weekly contests."
        />

        {/* <img data-aos="fade-up-right" src={compete} /> */}
      </Container>

      <Container className={classes.container}>
        <MainText
          variant="h5"
          text="4. Have fun crossword solving sessions with your friends"
        />

        {/* <img data-aos="fade-up-right" src={friends} /> */}
      </Container>
    </div>
  );
};

export default HomePage;
