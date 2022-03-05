import React from 'react';
import Web from './images/social-banner.jpg';

var webBanner = {
    backgroundImage: `url(${Web})`,
    backgroundColor: '#0d6efd',
     height: '500px',
     backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',

 };

function Slider() {

    return(
        <div>
             <section className="intro" style={ webBanner }>
             <div class="container text-center">
      <div class="row">
        <div class="col-sm-12">
          <h1>WEB DEVELOPMENT</h1>
          <p>Visually appealing, high quality
websites that inform & inspire</p>
        </div>
      </div>
    </div>
  </section>
        </div>
    );
}
export default Slider;