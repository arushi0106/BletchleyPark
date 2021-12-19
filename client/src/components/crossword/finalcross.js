import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
// import Footer from './Footer';
import Crossword from './Crossword.js';
import React, { useRef } from 'react';

const ComponentToPrint = React.forwardRef((props, ref) => (
    // <Footer ref={ref}></Footer>
  <div ref={ref}>
      <Crossword/>
     </div>
));

const MyCrossword = () => {
  const componentRef = useRef();

  return (
    <React.Fragment>
      <ComponentToPrint ref={componentRef} />
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
    </React.Fragment>
  );
};

export default MyCrossword;