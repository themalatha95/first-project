import React from 'react';


function Address() {

    return(
    <div>
        <section class="section">
    <div class="container">
    
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
			<form action="mail.php" method="post" id="contactForm">
            <div class="mb-3">
              <input type="text" name="name" class="form-control" placeholder="Name" />
            </div>
            <div class="mb-3">
              <input type="text" name="phone" class="form-control" placeholder="Phone Number" />
            </div>
            <div class="mb-3">
              <input type="email" name="email" class="form-control" placeholder="Email" />
            </div>
            <div class="mb-3">
              <textarea name="message" class="form-control" placeholder="Message"></textarea>
            </div>
            <div class="mb-3 d-grid">
				
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
			
        </div>
        
        <div class="col-sm-4">
          <p><strong>Vivan Projects</strong><br />
            2nd Floor, Gokulam Complex<br />
            Opp. Sree Venkateswara Swamy Temple<br />
            R.R. Pet, Eluru - 534002<br />
            Andhra Pradesh, India </p>
			<p><a href="mailto:info@vivanprojects.com">info@vivanprojects.com</a><br />
            +91-9700893999</p>
        </div>
      </div>
    </div>
  </section>

       

    </div>

    );
}
export default Address;