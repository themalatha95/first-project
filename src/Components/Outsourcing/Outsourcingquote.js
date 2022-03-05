import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

function Outsourcingquote() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <section class="bg-dark py-5"><div class="container"><div class="row justify-content-md-center g-3">
				    <div class="col-md-3">
						<h3 class="text-center mb-3">Need help? call <a href="tel:+91-9700893999" class="phone">+91-9700893999</a> or</h3>
						<div class="d-grid">
							 <Button type="submit" name="submit" class="btn btn-primary" onClick={handleShow}>Find Opportunities</Button>
							 </div>
				</div>
		</div></div></section>
            <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title><h5 class="mobile-h5">Choose Your Interst</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body> <div class="mb-3">
              <input type="text" name="name" class="form-control" placeholder="Name" />
            </div>
			<div class="mb-3">
              <input type="text" name="phone" class="form-control" placeholder="Phone Number" />
            </div>
		  <div class="mb-3">
		  <select class="form-select form-color" aria-label="Default">
  <option>Computer Operator</option>
  <option value="1">Front Desk Executive</option>
  <option value="2">Hotel Staff/Catering</option>
  <option value="3">Front End Developer</option>
</select>
		  </div>
			<div class="mb-3">
              <input type="text" name="email" class="form-control" placeholder="Email" />
            </div>
			<div class="mb-3">
              <textarea name="message" class="form-control" placeholder="Message"></textarea>
            </div>
			<div class="mb-3 d-grid">
        <button type="button" class="btn btn-primary">Submit</button>
		  </div></Modal.Body>
        
      </Modal>


        </div>
    );
}
export default Outsourcingquote;