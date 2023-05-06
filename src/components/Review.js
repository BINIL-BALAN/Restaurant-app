import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
function Review({reviews}) {
    const [open, setOpen] = useState(false);
    
 
  return (
   <>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Click to view reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
           {
            reviews.map(rewiew => (
                <div>
                     <h4>{rewiew.name} : ( <span>{rewiew.date}</span> )</h4>
                     <p>Rating : {rewiew.rating}</p>
                     <p>Comments : {rewiew.comments}</p>
                </div>
            ))
           }
        </div>
      </Collapse>
   </>
  )
}

export default Review