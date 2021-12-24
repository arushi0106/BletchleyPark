import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    paddingTop: "4rem",
    color: "#00b894",
    display: "flex",
  },
  special: {
    backgroundColor: "white",
    color: "#00b894",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#00b894",
  },
}));
