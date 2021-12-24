import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
// import Footer from './Footer';
import { Button } from "@material-ui/core";
import Crossword from "./Crossword.js";
import React, { useRef } from "react";
import useStyles from "./styles";
const ComponentToPrint = React.forwardRef((props, ref) => (
  // <Footer ref={ref}></Footer>
  <div ref={ref}>
    <Crossword />
  </div>
));

const MyCrossword = () => {
  const classes = useStyles();
  const componentRef = useRef();

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <Button
        variant="contained"
        className={classes.submit}
        onClick={() => exportComponentAsJPEG(componentRef)}
      >
        Export As JPEG
      </Button>
      <Button
        variant="contained"
        className={classes.submit}
        onClick={() => exportComponentAsPDF(componentRef)}
      >
        Export As PDF
      </Button>
      <Button
        variant="contained"
        className={classes.submit}
        onClick={() => exportComponentAsPNG(componentRef)}
      >
        Export As PNG
      </Button>
    </div>
  );
};

export default MyCrossword;
