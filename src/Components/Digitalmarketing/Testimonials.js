import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import Smr from './images/smr-estates-logo.png';
import Chan from './images/chandana.jpg';
import Sri from './images/sri.jpg';
import Joy from './images/joypools.png';
import Test from './images/tesoftsol.png';
import Tactus from './images/tactus.png';

function Testimonials() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(

        <div>
            <section class="section testimonials">
    <div class="container">
      <h2 class="text-center">CLIENTS <span class="text-danger">SERVED</span></h2>
		<p class="text-center test-des">Our marketing partners have proudly served these businesses and many more.</p>
      <div class="row justify-content-sm-center row-cols-3 mt-4 g-3 text-center">
        <div class="col-sm-2 mt-5 c-1">
			<div class="clients">
          <img src={Smr} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  <div class="col-sm-2">
			<div class="clients">
          <img src={Chan} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  <div class="col-sm-2">
			<div class="clients">
          <img src={Sri} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  <div class="col-sm-2 mt-5">
			<div class="clients">
          <img src={Joy} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  <div class="col-sm-2 mt-5">
			<div class="clients">
          <img src={Test} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  <div class="col-sm-2 mt-5">
			<div class="clients">
          <img src={Tactus} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  
        
        
      </div>
    </div>
  </section>
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
        {/* <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title mobile-h5" id="exampleModalLabel"> variant="primary" onClick={handleShow}/h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
		 <div class="mb-3">
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
		  </div>
		</div>
		
      
         
			
		  
			
			
			
   
			  
    </div>
  </div>
</div> */}
        </div>
    );
}
export default Testimonials;