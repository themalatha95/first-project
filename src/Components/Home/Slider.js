import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import Quote from './Quote.js';


var  banner={
    backgroundImage: 
 "url('https://vivanprojects.com/images/slider-4.jpg')",
   backgroundColor: '#0d6efd',
	height: '500px',
    backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
};

function Slider() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
          <section className="intro" style={banner}>
    <div className="container text-center">
      <div className="row">
        <div className="col-sm-12">
			 <h1>WHERE INNOVATION MEETS THE REAL WORLD</h1>
			<p className="mb-3">Technologies Future Depends on Innovators.</p>

			<Button type="button" className="btn btn-primary btn-lg" onClick={handleShow}>GET A QUOTE</Button>
        </div>
      </div>
    </div>
  </section>

        </div>
    );
}

export default Slider;