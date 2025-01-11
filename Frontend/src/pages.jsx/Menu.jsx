import React, { useState } from 'react';
import '../pages.css/menu.css';

const Menu = () => {
  // State to track which category is selected
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      title: 'Breakfast',
      description: 'Start your day with a variety of delicious breakfast options.',
      image: 'breakfast.jpg',  // Add an image for the category
      items: [
        {
          name: 'Pancakes',
          price: '$5.99',
          image: 'pancakes.jpg',
          description: 'Fluffy pancakes topped with syrup and butter.',
        },
        {
          name: 'Omelette',
          price: '$7.99',
          image: 'omelette.jpg',
          description: 'Egg omelette with your choice of vegetables and cheese.',
        },
        {
          name: 'Fruit Salad',
          price: '$4.99',
          image: 'fruitsalad.jpg',
          description: 'A fresh mix of seasonal fruits.',
        },
      ],
    },
    {
      title: 'Lunch',
      description: 'A hearty selection of lunch meals to satisfy your hunger.',
      image: 'lunch.jpg',  // Add an image for the category
      items: [
        {
          name: 'Burger & Fries',
          price: '$8.99',
          image: 'burger.jpg',
          description: 'Juicy beef burger served with crispy fries.',
        },
        {
          name: 'Grilled Chicken',
          price: '$10.99',
          image: 'grilledchicken.jpg',
          description: 'Tender grilled chicken served with vegetables.',
        },
        {
          name: 'Veggie Wrap',
          price: '$6.99',
          image: 'veggiewrap.jpg',
          description: 'A healthy wrap with mixed vegetables and hummus.',
        },
      ],
    },
    {
      title: 'Dinner',
      description: 'Enjoy a fine dining experience with our dinner specials.',
      image: 'dinner.jpg',  // Add an image for the category
      items: [
        {
          name: 'Steak',
          price: '$15.99',
          image: 'steak.jpg',
          description: 'Juicy grilled steak served with mashed potatoes.',
        },
        {
          name: 'Salmon',
          price: '$18.99',
          image: 'salmon.jpg',
          description: 'Pan-seared salmon with a side of rice and veggies.',
        },
        {
          name: 'Pasta',
          price: '$12.99',
          image: 'pasta.jpg',
          description: 'Creamy pasta with your choice of sauce and toppings.',
        },
      ],
    },
    {
      title: 'Drinks',
      description: 'Choose from a variety of refreshing beverages.',
      image: 'drinks.jpg',  // Add an image for the category
      items: [
        {
          name: 'Coffee',
          price: '$2.99',
          image: 'coffee.jpg',
          description: 'Hot brewed coffee served with cream and sugar.',
        },
        {
          name: 'Juice',
          price: '$3.99',
          image: 'juice.jpg',
          description: 'Freshly squeezed juice from seasonal fruits.',
        },
        {
          name: 'Soda',
          price: '$1.99',
          image: 'soda.jpg',
          description: 'Refreshing soda served cold.',
        },
      ],
    },
  ];

  return (
    <div className="menu">
      <h1>Hotel Menu</h1>

      <div className="categories">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => setSelectedCategory(category.title)}
          >
            <div className="category-description">
              <div className="food-circle">
                <p>{category.description}</p>
              </div>
            </div>
            <h2>{category.title}</h2>
            <img src={`../assets/${category.image}`} alt={category.title} className="category-image" />
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="category-menu">
          <h2>{selectedCategory} Menu</h2>
          {categories
            .filter((category) => category.title === selectedCategory)
            .map((category, index) => (
              <div key={index}>
                <ul>
                  {category.items.map((item, idx) => (
                    <li key={idx} className="menu-item">
                      <div className="item-details">
                        <img src={`../assets/${item.image}`} alt={item.name} className="item-image" />
                        <div className="item-info">
                          <h3>{item.name} - {item.price}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
