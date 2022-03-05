import React from 'react';
import Co from './images/co-1.jpg';
import Fd from './images/fd-1.jpg';
import Hmc from './images/hmc-1.jpg'; 
import Fed from './images/fed.jpg'; 

function Content() {

   
    return(
        <div>
            <section class="section bg-dark">
			  <div class="container">
				  <div class="row justify-content-md-center">
      <div class="col-md-10">
        <h2 class="text-center">OUT <span class="text-danger">SOURCING</span></h2>
        <p class="text-center mt-3 mobile">Vivan Consulting Services work round the clock to ensure success based on your knowledge about leading and up-to-date technologies. We have huge experience in IT technologies and management outsourcing. We provide appropriate IT solutions to meet your unique specifications. We work with you to understand your requirement and establish a well-defined outsourcing model which suits you. The eligible candidates registered with us will get information for opportunities in other companies for job placement and career solutions. We can give to them as per their skills, experience, and expertise.</p>
      </div>
    </div>
			  </div>
		  </section>
          <section class="section outsource">
    <div class="container">
		  <div class="row justify-content-md-center">
      <div class="col-md-10">
      <h2 class="text-center">JOBS WE <span class="text-danger">OFFER</span></h2>
    
						
		
		<div class="row justify-content-md-center mt-1 g-3">
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card co-block-1">
          <div class="image"> <a href="#"> <img src={Co} class="card-img-top" alt="..." /> </a> </div>
          <div class="card-body">
            <h5 class="card-title"><a href="#">COMPUTER OPERATOR</a></h5>
            <p>Operating computer technology on Vivan Projects helps you to manage/adopt the memory and processes in both software and hardware.</p>
           </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card">
          <div class="image"> <a href="#"> <img src={Fd} class="card-img-top" alt="..." /> </a> </div>
          <div class="card-body">
            <h5 class="card-title"><a href="#">FRONT DESK EXECUTIVE</a></h5>
            <p>We administrate the customer service team to opt the front office operations like attending calls, receiving guests, maintaining records like professionals in education society, hotels and healthcare facilities.</p>
           </div>
        </div>
      </div>
   
    </div>
		<div class="row justify-content-md-center mt-3 g-3">
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card">
          <div class="image"> <a href="#"> <img src={Hmc} class="card-img-top" alt="..." /> </a> </div>
          <div class="card-body">
            <h5 class="card-title"><a href="#">HOTEL STAFF/CATERING</a></h5>
            <p>Who is willing to work in the catering industry and housekeeping loves to serve beverages, food, and other services as hospitality? Vivan projects hire people at the position of trainee or executive in F&amp;B.</p>
           </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card">
          <div class="image"> <a href="#"> <img src={Fed} class="card-img-top" alt="..." /> </a> </div>
          <div class="card-body">
            <h5 class="card-title"><a href="#">FRONT-END DEVELOPER</a></h5>
            <p>Vivan projects hire people who are looking forward to starting their career as web Developers. Here they learn how to implement visual and interactive elements that users see on their web browser using a web application.</p>
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