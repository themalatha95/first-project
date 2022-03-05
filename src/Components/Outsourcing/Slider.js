import React from 'react';
import Outsource from './images/outsource-banner.jpg';

var outSourceBanner = {
    backgroundImage: `url(${Outsource})`,
    backgroundColor: '#0d6efd',
     height: '500px',
     backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',

 };

function Slider() {

    return(
        <div>
             <section className="intro" style={ outSourceBanner }>
             <div class="container text-center">
      <div class="row">
        <div class="col-sm-12">
          <h1>OUT SOURCING </h1>
          <p>Ability To Make The Things Greater.</p>
        </div>
      </div>
    </div>
  </section>
        </div>
    );
}
export default Slider;