import React from 'react';
import Bg from './images/bg-service.jpg';
import Ux from './images/ux-icon.png';
import Co from './images/code-icon.png';
import Wr from './images/writing-icon.png';
import Gr from './images/graphic.png';
import Pr from './images/print-icon.png';
import Sm from './images/smr-estates-logo.png';
import Ch from './images/techsource.png';
import Sr from './images/nutritionfact.png';
import Jo from './images/joypools.png';
import Te from './images/tesoftsol.png';
import Ta from './images/tactus.png';  

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

function Webcontent() {
    return(
        <div>
            <section class="section bg-dark">
			  <div class="container">
				  <div class="row justify-content-md-center">
      <div class="col-md-10">
        <h2 class="text-center">WEB <span class="text-danger">DEVELOPMENT</span></h2>
        <p class="text-center mt-3 mobile">Vivan Projects is a sincere leader in the field of technology services, Web development for the past 3 years. Web development could be a good profession for you if you like solving logical problems, building useful things, and experimenting with new technologies. Web developers are in high demand, generally have a good work/life balance, and command comfortable salaries. It encompasses everything from a simple page of HTML text to complex, feature-rich applications designed to be accessed from various Internet-connected devices.
<span class="wr">Web development is everything involved in the creation of a website. Typically it refers to the coding and programming side of website production as disputing to the web design side. Examples of feature-rich web development include e-commerce websites, content management systems (CMS), and social networks. Common web development programming languages and software include Hypertext Mark-up Language (HTML), Cascading Style Sheets (CSS), JavaScript, PHP, and MySQL.</span>
</p>
		  <p class="readmore text-center"><a href="#" id="toggleWr"><strong>Read more<i class="fa fa-angle-double-right"></i> </strong></a></p>
      </div>
    </div>
			  </div>
		  </section>
          <section class="section dm-services" style={dmServices}>
		  <div class="container">
			  <h2>OUR CREATIVE &amp; DEVELOPMENT SERVICES</h2>
			  <div class="row justify-content-md-center mt-3 g-3">
				      <div class="col-12 col-sm-3 col-md-3 text-center">
      <img src={Pr} class="img-fluid" alt="" />
						 <p class="sm-title">Print/Digital Media</p>
      </div>
				  <div class="col-12 col-sm-3 col-md-3 text-center">
      <img src={Ux} class="img-fluid" alt="" />
						 <p class="sm-title">User Experience Design</p>
      </div>
				    <div class="col-12 col-sm-3 col-md-3 text-center">
      <img src={Co} class="img-fluid" alt="" />
						 <p class="sm-title">
Website Designing</p>
      </div>
				  
				  
			  </div>
			  <div class="row justify-content-md-center mt-5 g-3">
				      <div class="col-12 col-sm-3 col-md-3 text-center">
      <img src={Wr} class="img-fluid" alt="" />
						 <p class="sm-title">Content Creation</p>
      </div>
				  <div class="col-12 col-sm-3 col-md-3 text-center">
      <img src={Gr} class="img-fluid" alt="" />
						 <p class="sm-title">Graphic Design</p>
      </div>
				   
				  
				  
			  </div>
			  
			  </div>
		  </section>
          <section class="section testimonials">
    <div class="container">
      <h2 class="text-center">CLIENTS <span class="text-danger">SERVED</span></h2>
		<p class="text-center client-desc">Our marketing partners have proudly served these businesses and many more.</p>
      <div class="row justify-content-sm-center row-cols-3 mt-4 g-3 text-center">
        <div class="col-sm-2 mt-5 c-1">
			<div class="clients">
          <img src={Sm} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  <div class="col-sm-2 mt-5">
			<div class="clients">
          <img src={Ch} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  <div class="col-sm-2 mt-5">
			<div class="clients">
          <img src={Sr} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  <div class="col-sm-2 mt-5">
			<div class="clients">
          <img src={Jo} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  <div class="col-sm-2 mt-5">
			<div class="clients">
          <img src={Te} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  <div class="col-sm-2 mt-5">
			<div class="clients">
          <img src={Ta} alt="Google" title="Google" class="img-fluid" /></div>
        </div>
		  
        
        
      </div>
    </div>
  </section>

        </div>
    );
}
export default Webcontent;