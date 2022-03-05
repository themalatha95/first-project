import React from 'react';
import Background  from './images/about.jpg';


var  banner={
  backgroundImage: `url(${Background})`,
   backgroundColor: '#0d6efd',
	height: '500px',
    backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
};

function Slider() {
    return (
        <div>
          <section className="intro" style={ banner }>
    <div className="container text-center">
      <div className="row">
        <div className="col-sm-12">
			 <h1>ABOUT VIVAN PROJECTS </h1>
			

			
        </div>
      </div>
    </div>
  </section>



        </div>
    );
}

export default Slider;