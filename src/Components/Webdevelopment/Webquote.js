import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

function Webquote() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <section class="bg-dark py-5"><div class="container"><div class="row justify-content-md-center g-3">
				    <div class="col-md-3">
						<h3 class="text-center mb-3">Need help? call <a href="tel:+91-9700893999" class="phone">+91-9700893999</a> or</h3>
						<div class="d-grid">
			
              <Button type="submit" name="submit" class="btn btn-primary" onClick={handleShow}>Get Free Consultation</Button>
            </div>
				</div>
		</div></div></section>
        <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title><h5 class="mobile-h5">PROVIDE YOUR DETAILS & WE WILL GET BACK TO YOU</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body><div class="mb-3">
              <input type="text" name="name" class="form-control" placeholder="Name" />
            </div>
				  <div class="mb-3">
              <input type="text" name="name" class="form-control" placeholder="Contact Number" />
            </div>
				   <div class="mb-3">
              <input type="text" name="name" class="form-control" placeholder="Website" />
            </div>
				   
				  
			
			  <div class="mb-3">
              <input type="text" name="name" class="form-control" placeholder="Email" />
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
export default Webquote;