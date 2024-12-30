import React from 'react';
import '../pages.css/About.css';
import h1 from '../assets/h1.jpg';
import h2 from '../assets/h2.jpg';
import h3 from '../assets/h3.jpg';
import h4 from '../assets/h4.jpg';

export default function About() {
  return (
    <>   
      <div className='about'>
        <div className='text'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magni, voluptas debitis natus 
          iure maxime, perspiciatis veniam, minus placeat. Sed, necessitatibus.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates tempore dolore, 
        at cupiditate aut incidunt consectetur, 
        voluptatem nam omnis delectus nobis iure? Odit laborum maiores dicta dolore, dolorem deleniti?</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, autem. Repellat quaerat autem velit fuga, 
          officia sed, a nulla tempore quia in cumque temporibus. Tenetur dolore iusto voluptatum aliquam tempore.</p>
    </div>
    <div className='images'>
      <img src={h1}alt='hotel' />  
      <img src={h2} alt='hotel'  />
      <img src={h3} alt='hotel' />
      <img src={h4}  alt='hotel' />

    </div>

    </div>
    </>

  )
}
