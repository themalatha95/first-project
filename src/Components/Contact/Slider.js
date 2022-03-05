import React from 'react';
import Contact from './contact-banner.jpg';

var contactBanner = {
    backgroundImage: `url(${Contact})`,
    backgroundColor: '#0d6efd',
     height: '500px',
     backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',

 };

function Slider() {

    return(
        <div>
             <section className="intro" style={ contactBanner }>
             <div class="container text-center">
      <div class="row">
        <div class="col-sm-12">
          <h1>CONTACT US </h1>
          <p>If you have any questions regarding our services, please feel free to give us a call. Our friendly staff will be happy to work out a solution that will best suit your needs.</p>
        </div>
      </div>
    </div>
  </section>
        </div>
    );
}
export default Slider;