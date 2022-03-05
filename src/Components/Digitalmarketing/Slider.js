import React from 'react';
import Digital from './images/social-banner-1.jpg';

 var digitbanner = {
    backgroundImage: `url(${Digital})`,
    backgroundColor: '#0d6efd',
     height: '500px',
     backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',

 };


function Slider() {
    return(
        <div>
             <section className="intro" style={ digitbanner }>
    <div className="container text-center">
    <div class="row">
        <div class="col-sm-12">
          <h1>DIGITAL MARKETING </h1>
          <p>Reach customers looking for your business. We will help manage your campaigns<br />
            and meet your advertising goals.</p>
        </div>
      </div>
    </div>
  </section>

        </div>
    );
}
export default Slider;