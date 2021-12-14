import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    // margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#2d3436",
  },
  image: {
    marginLeft: "15px",
  },
  mainContainer: {
    flexDirection: "column-reverse",
  },
}));
