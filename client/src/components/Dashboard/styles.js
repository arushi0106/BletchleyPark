import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    paddingTop: "6rem",
  },
  vertical: {
    borderLeft: "solid",
  },
  submit: {
    margin: "10px",
    backgroundColor: "#00b894",
    color: "white",
    "&:hover": {
      backgroundColor: "#004d40",
    },
  },
  main: {
    textAlign: "center",
    fontSize: "3rem",
    paddingTop: "7rem",
  },
}));
