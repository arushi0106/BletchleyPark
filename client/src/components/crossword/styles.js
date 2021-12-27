import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: { paddingTop: "10rem", marginTop: "6px" },
  input: {
    width: "2rem",
    height: "2rem",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "white",
    borderColor: "#bdc3c7",
    borderWidth: "1px",
  },
  inputBlock: {
    width: "2rem",
    height: "2rem",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: "1px",
  },
  pdf: {
    paddingTop: "10rem",
  },
  submit: {
    marginTop: "6px",
    margin: "2px",
    backgroundColor: "#00b894",
    color: "white",
    "&:hover": {
      backgroundColor: "#004d40",
    },
  },
  main: {
    textAlign: "center",
    color: "grey",
  },
}));
