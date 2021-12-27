import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    paddingTop: "4rem",
  },
  special: {
    backgroundColor: "#00b894",
    color: "white",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  submit: {
    margin: "10px",
    backgroundColor: "#00b894",
    color: "white",
    "&:hover": {
      backgroundColor: "#004d40",
    },
  },
}));
