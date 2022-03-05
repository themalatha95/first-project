import React from 'react';
import Skill from './images/skill-banner.jpg';

var skillBanner = {
    backgroundImage: `url(${Skill})`,
    backgroundColor: '#0d6efd',
     height: '500px',
     backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',

 };

function Slider() {

    return(
        <div>
             <section className="intro" style={ skillBanner }>
             <div class="container text-center">
      <div class="row">
        <div class="col-sm-12">
          <h1>SKILL-DEVELOPMENT</h1>
          <p>Build you Pathway to a Brighter Future with the Skills to do the Job!</p>
        </div>
      </div>
    </div>
  </section>
        </div>
    );
}
export default Slider;