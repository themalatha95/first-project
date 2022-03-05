import React from 'react';
import Seo from './images/seo-icon.png';
import Share from './images/share.png';
import Email from './images/email.png';
import Paid from './images/paid.png';
import Tv from './images/tv.png';
import Ssm from './images/s-s-m-icon.png';
import Bg from './images/bg-service.jpg';

var dmServices = {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    borderWidth: '0px',
    borderColor: 'rgb(234, 233, 233)',
    borderStyle: 'solid',
    backgroundSize: 'cover',
    backgroundImage: `url(${Bg})`,

};


function Marketingservices() {
    return(
        <div>
            <section class="section dm-services" style={dmServices}>
		  <div class="container">
			  <h2>OUR MARKETING SERVICES</h2>
			  <div class="row justify-content-md-center mt-3 g-3">
				      <div class="col-12 col-sm-3 col-md-3 text-center">
      <img src={Seo} class="img-fluid" alt="" />
						 <p class="sm-title">SEO/SEM</p>
      </div>
				  <div class="col-12 col-sm-3 col-md-3 text-center">
      <img src={Share} class="img-fluid" alt="" />
						 <p class="sm-title">Social Media</p>
      </div>
				    <div class="col-12 col-sm-3 col-md-3 text-center">
      <img src={Email} class="img-fluid" alt="" />
						 <p class="sm-title">Email and Mobile Marketing</p>
      </div>
				  
				  
			  </div>
			  <div class="row justify-content-md-center mt-5 g-3">
				      <div class="col-12 col-sm-3 col-md-3 text-center">
      <img src={Paid} class="img-fluid" alt="" />
						 <p class="sm-title">Paid Search Advertising</p>
      </div>
				  <div class="col-12 col-sm-3 col-md-3 text-center">
      <img src={Tv} class="img-fluid" alt="" />
						 <p class="sm-title">Radio/TV</p>
      </div>
				    <div class="col-12 col-sm-3 col-md-3 text-center">
      <img src={Ssm} class="img-fluid" alt="" />
						 <p class="sm-title">Outdoor Advertising</p>
      </div>
				  
				  
			  </div>
			  
			  </div>
		  </section>
        </div>

    );
}

export default Marketingservices;
