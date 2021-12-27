import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    paddingTop: "15rem",
    color: "#00b894",
  },
  container: {
    paddingTop: "6rem",
    color: "#00b894",
    // display: "flex",
    // flexDirection: "row-reverse",
  },
  special: {
    backgroundColor: "white",
    color: "#00b894",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  imageA: {
    paddingLeft: "5rem",
  },
  imageB: {
    paddingRight: "5rem",
  },
  submit: {
    margin: "2px",
    backgroundColor: "#00b894",
    color: "white",
    "&:hover": {
      backgroundColor: "#004d40",
    },
  },
}));
