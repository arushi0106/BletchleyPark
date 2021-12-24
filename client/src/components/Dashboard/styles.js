import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    paddingTop: "6rem",
  },
  vertical: {
    borderLeft: "solid",
  },
  submit: {
    backgroundColor: "#00b894",
    color: "white",
    "&:hover": {
      backgroundColor: "#004d40",
    },
  },
}));
