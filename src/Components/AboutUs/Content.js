import React from 'react';
import  BG from './images/bg.png';
import People from './images/people.png';
import Process from './images/process-icon.png';
import Tech from './images/technology-icon.png';

var success = {
   
    backgroundImage: `url(${BG})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '350px',
        backgroundPosition: '50%',
   
};
var box =  {
  borderRadius: '20px',
  boxShadow: '0px 0px 10px rgb(0 0 0 / 10%)',
};


function Content() {
    return (
        <div>
         


<section class="section" style={ success }>
  <div class="container">
	  <h2 class="text-center">THE THREE PILLARS TO <span class="text-danger">OUR SUCCESS</span></h2>
	     <div class="row justify-content-md-center">
   <div class="col-12 col-md-10">
	  <div class="row justify-content-md-center mt-5 g-3">
		  <div class="col-12 col-sm-4 col-md-4">
			   <div class="card h-100" style={box}>
          <div class="image"> <a href="#"> <img src={People} width="60px" alt="..." /> </a> </div>
          <div class="card-body text-center">
            <h5 class="card-title"><a href="#">PEOPLE</a></h5>
            <p>Flat management culture where everyone is encouraged to share their ideas. We enable unique career paths that answer to the pace of development and ambition of each team member individually.</p>
            </div>
        </div>
		  </div>
		  <div class="col-12 col-sm-4 col-md-4">
			   <div class="card card-box h-100" style={box}>
          <div class="image"> <a href="#"> <img src={Tech} width="60px" alt="..." /> </a> </div>
          <div class="card-body text-center">
            <h5 class="card-title"><a href="#">TECHNOLOGY</a></h5>
            <p>We use technologies to create product that drive the innovation in the industry. Our products are build with full horizontal scalability fit for exponential growth.</p>
            </div>
        </div>
		  </div>
		  <div class="col-12 col-sm-4 col-md-4">
			   <div class="card h-100" style={box}>
          <div class="image"> <a href="#"> <img src={Process} width="60px" alt="..." /> </a> </div>
          <div class="card-body text-center">
            <h5 class="card-title"><a href="#">PROCESS</a></h5>
            <p>Agile development processes are the backbone of our successful operations. Transparent and collaborative communicaion are the foundaion of our agile work.</p>
            </div>
        </div>
		  </div>
		  
		   
	  </div>
			 </div></div>
		  </div>
		  </section>

        </div>
    );
}
export default Content;