import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

function Quote() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <section className="bg-dark py-5">
                <div className="container">
                    <div className="row justify-content-md-center g-3">
				         <div className="col-md-3">
				            <h3 className="text-center mb-3">Need help? call <a href="tel:+91-9700893999" className="phone">+91-9700893999</a> or</h3>
						        <div className="d-grid">
							        <Button type="submit" name="submit" className="btn btn-primary" onClick={handleShow}>GET A QUOTE</Button>
						        </div>
				         </div>
		             </div>
                 </div>
            </section>
            <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title><h5 class="mobile-h5">Choose Your Interst</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body> 
   
		 <div class="mb-3">
              <input type="text" name="name" class="form-control" placeholder="Name" />
            </div>
				  <div class="mb-3">
              <input type="text" name="name" class="form-control" placeholder="Contact Number" />
            </div>
				   <div class="mb-3">
		  <select class="form-select form-color" aria-label="Default">
  <option>Digital Marketing</option>
  <option value="1">Web Development</option>
  <option value="2">Skill Development</option>
  <option value="3">Outsourcing</option>
</select>
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
		
        </Modal.Body>
        
      </Modal>
        </div>
    );
}

export default Quote;