import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  x: {
    backgroundColor: "black",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  text: {
    textAlign: "center",
  },
  paper: {
    paddingTop: "14rem",
    // padding: theme.spacing(2),
    // backgroundColor: "#00b894",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
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
