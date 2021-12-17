import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  appBar: {
    // marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#00b894",
    color: "white",
    // padding: "1rem",
  },
  heading: {
    color: "white",
  },
  image: {
    marginLeft: "15px",
  },
  mainContainer: {
    flexDirection: "column-reverse",
  },
  profile: {
    display: "flex",
  },
  button: {
    backgroundColor: "white",
    color: "black",
  },
}));
