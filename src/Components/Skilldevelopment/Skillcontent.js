import React from 'react';
import Ts from './images/t-s.jpg';
import Th from './images/t-h.jpg';
import Tm from './images/t-m.jpg';
import Es from './images/eshift.png';
import Pa from './images/Paradise-Logo.png';
import Hi from './images/highzeal-logo.png';
import Se from './images/selectsys-logo.png';   


function Skillcontent() {
    return(
        <div>
            <section class="section bg-dark">
			  <div class="container">
				  <div class="row justify-content-md-center">
      <div class="col-12 col-md-10">
        <h2 class="text-center">SKILL <span class="text-danger">DEVELOPMENT</span></h2>
        <p class="text-center mt-3 mobile">Vivan Project’s Skill Development is the recognition of the skills gap in unemployed youth and providing employment benefits &amp; skills training to them. This course aims to acknowledge the ability of the youth and extend their support by serving them with proper guidance, infrastructure, opportunities, and encouragement that help them achieve their goals in the future. The benefits of skill development admit improved performance, increased business profits, accuracy, recruitment &amp; career opportunities, and development of good customer relations. We continuously make efforts to provide skill development to the youth with their skilling partners around the country.</p>
      </div>
    </div>
			  </div>
		  </section>
          <section class="section testimonials">
    <div class="container">
      <h2 class="text-center">OUR STUDENTS <span class="text-danger">TESTIMONIALS</span></h2>
	 <div class="row justify-content-md-center">
      <div class="col-12 col-md-10">
      <div class="row justify-content-md-center mt-4 g-3">
        <div class="col-12 col-sm-4 col-md-4">
          <div class="card"> <img src={Ts} alt="..." class="ts-img" />
            <div class="card-body text-center">
              <h3 class="mt-0">Suryanarayana P</h3>
              <p class="job">Web Developer</p>
              <p class="job-des">It is a great opportunity for training, for good knowledge for web development and to do for great web pages and I trained well and I got a Job in <b>eShift Software.</b></p>
				<p class="rating"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-md-4">
          <div class="card box"> <img src={Th} alt="..." class="ts-img" />
            <div class="card-body text-center">
              <h3 class="mt-0">Hemalatha N</h3>
              <p class="job">Web Developer</p>
              <p>I learned web technologies in Vivan Institute with real time 
                experts.I highly recommend
                vivan projects for professional learning and execution.I got a Job in <b>Selectsys</b>.</p>
				<p class="rating"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-md-4">
          <div class="card box"> <img src={Tm} alt="..." class="ts-img" />
            <div class="card-body text-center">
              <h3 class="mt-0">Mounika P</h3>
              <p class="job">Web Developer</p>
              <p>Myself started with zero and became a full time Web Desginer. This is the training institute in eluru.For me Vivan Projects is a knowledge hub for everyone.I got a Job in <b>eShift Software</b>.</p>
				<p class="rating"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
            </div>
          </div>
        </div>
      </div>
		 </div></div>
    </div>
  </section>
  <section class="section clients bg-dark">

  <div class="container">
	  <h2 class="text-center">OUR <span class="text-danger">PLACEMENTS</span></h2>
	   <div class="row justify-content-md-center">
      <div class="col-12 col-md-10">
    <div class="row justify-content-md-center row-cols-2 g-3 mt-3 client-name">
		<div class="col-sm-3 col-md-2"><div class="clients-1"><img src={Es} alt="" class="img-fluid" /></div></div>
		<div class="col-sm-3 col-md-2"><div class="clients-1"><img src={Pa} alt="" class="img-fluid" /></div></div>
      
		<div class="col-sm-3 col-md-2"><div class="clients-1"><img src={Hi} alt="" class="img-fluid" /></div>
		</div>
		<div class="col-sm-3 col-md-2"><div class="clients-1"><img src={Se} alt="" class="img-fluid" /></div></div>
		</div>
		   </div></div>
		
  
    
  </div>
  </section>

        </div>
    );

}
export default Skillcontent;