import React from 'react';
import Pdf from 'react-to-pdf';


const ref = React.createRef();

const PDF = (props) => {
    return(

        <>
            <div className = "CreatePost" ref={ref}>

            </div>

            <Pdf targetRef={ref} filename="post.pdf">
                {({toPdf}) => <button onClick={toPdf}>Save as PDF</button>}
            
            </Pdf>

          </>  


     
    );
}

export default PDF;