import React from 'react';
import '../pages.css/About.css';
import drinks from '../assets/drinks.png';
import orange from '../assets/orange.png';
import table2 from '../assets/table2.png';
import ssofa from '../assets/ssofa.png';

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
      <img src={drinks}alt='hotel' />  
      <img src={orange} alt='hotel'  />
      <img src={table2} alt='hotel' />
      <img src={ssofa}  alt='hotel' />

    </div>

    </div>
    </>

  )
}
