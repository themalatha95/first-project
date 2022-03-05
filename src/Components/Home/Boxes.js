import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Bone from '../Home/Images/social.jpg';
import Btwo from '../Home/Images/skill.jpg';
import Bthree from '../Home/Images/web.jpg';


function Boxes() {
    return (
        <div>
           <section className="section">

<div className="container">
<div className="row justify-content-md-center">
      <div className="col-12 col-md-10">
  
      <h2 className="text-center">WELCOME TO <span class="text-danger">VIVAN</span></h2>
      <p className="text-center mt-3 mobile">It all begins with Vivan projects. We offering is powered by a team that combines Web Designing and Digital Marketing, Skill-Development and Outsourcing &amp; IT Services. Expertise to create the perfect plan in order to create Powerful companies. And reach the success to the right clients. One must start right. “we began with an open mind where ideas, strategies, and information are shared to achieve total clarity. About our services it is several steps ahead of the innovative services.”</p>
        <p className="text-center mobile">We believe that creativity is heart of IT Services the “BIG IDEA that makes the BIG DEFFERENCE.” Inspired talented people putting in their best in their fields of strength work the magic regular brain stroming sessions. We understand of the local markets and more go into our work to create the impact. Vivan projects encourage our clients to be brave and address and social causes through their what would they want services from Vivan projects.
</p>
    
<div className="row justify-content-md-center mt-5 g-3">
      
      <div className="col-12 col-sm-4 col-md-4">
        <div className="card">
          <div className="image"> <a href="#"> <img src={Bone} className="card-img-top" alt="..." /> </a> </div>
          <div className="card-body">
            <h5 className="card-title"><a href="#">DIGITAL MARKETING</a></h5>
            <p>Social Media Marketing is about feeding the discovery of new content. This 'discovery' has a method to it. </p>
            <Link to ="digital-marketing" className="know-text">KNOW MORE<i className="fa fa-angle-double-right"></i></Link> </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-md-4">
        <div className="card">
          <div className="image"> <a href="#"> <img src={Btwo} className="card-img-top" alt="..." /> </a> </div>
          <div className="card-body">
            <h5 className="card-title"><a href="#">WEB DEVELOPMENT</a></h5>
            <p className="mobile-r">Web design is not simply how a site looks and feels, it’s about how it works behind the scenes. </p>
            <Link to ="web-development" className="know-text">KNOW MORE<i className="fa fa-angle-double-right"></i></Link> </div>
        </div>
      </div>
		<div className="col-12 col-sm-4 col-md-4">
        <div className="card">
          <div className="image"> <a href="#"> <img src={Bthree} className="card-img-top" alt="..." /> </a> </div>
          <div className="card-body">
            <h5 className="card-title"><a href="#">SKILL DEVELOPMENT</a></h5>
            <p>Vivan Projects is a technology - driven Skill Training institute help professionals advance in their career.</p>
            <Link to ="skill-development" className="know-text">KNOW MORE<i className="fa fa-angle-double-right"></i></Link> </div>
        </div>
      </div>
    </div>
  
</div>
</div>
		</div>
</section>

        </div>
    );
}

export default Boxes;