import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: { paddingTop: "9rem" },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#00b894",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00b894",
    color: "white",
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#00b894",
    color: "white",
  },
}));
