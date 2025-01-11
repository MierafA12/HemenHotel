import React from 'react';
import '../pages.css/About.css';
import drinks from '../assets/drinks.png';
import orange from '../assets/orange.png';
import table2 from '../assets/table2.png';
import ssofa from '../assets/ssofa.png';

export default function About() {
  return (
    <div className="about">
      <div className="text">
        <h1>About <span>Us</span></h1>
        <p>
          Welcome to Hemen Hotel! We are dedicated to creating unforgettable experiences by providing 
          exceptional services, delicious cuisine, and a luxurious atmosphere.
        </p>
        <p>
          Indulge in our wide variety of culinary delights. From traditional dishes to international cuisine, 
          we cater to all taste preferences. Our menu features freshly prepared meals made with locally sourced 
          ingredients, ensuring every bite is a treat.
        </p>
        <p>
          Our bar offers an impressive selection of beverages, including handcrafted cocktails, fine wines, and 
          refreshing mocktails. Whether you’re unwinding after a long day or celebrating a special occasion, 
          our drinks menu has something for everyone.
        </p>
        <p>
          At Hemen Hotel, your comfort is our priority. Relax in our elegantly designed rooms featuring cozy 
          furnishings, modern amenities, and scenic views. Whether you're here for business or leisure, 
          our accommodations are tailored to ensure a restful stay.
        </p>
      </div>
      <div className="images">
        <div className="image-container" data-hover="Enjoy refreshing cocktails at our bar.">
          <img src={drinks} alt="Drinks" />
        </div>
        <div className="image-container" data-hover="Start your day with a healthy breakfast.">
          <img src={orange} alt="Orange" />
        </div>
        <div className="image-container" data-hover="Experience fine dining in style.">
          <img src={table2} alt="Dining Table" />
        </div>
        <div className="image-container" data-hover="Relax in our cozy lounge area.">
          <img src={ssofa} alt="Sofa" />
        </div>
      </div>
    </div>
  );
}
