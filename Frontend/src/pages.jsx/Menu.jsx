import React, { useState } from 'react';
import '../pages.css/menu.css';
import piza from '../assets/piza.png';
import doro from '../assets/doro.jpg';
import coffee from '../assets/coffee.jpg';
import wine from '../assets/wine.jpg';
const Menu = () => {
  // State to track which category is selected
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
     {
    title: 'Fasting Day',
    image: 'fasting.jpg', // Add an image for the category
    items: [
      {
        name: 'Injera with Shiro',
        price: '$5.99',
        image: 'injera-shiro.jpg',
        description: 'Traditional Ethiopian fasting dish made with chickpea stew.',
      },
      {
        name: 'Misir Wot',
        price: '$4.99',
        image: 'misir-wot.jpg',
        description: 'Spicy lentil stew served with injera.',
      },
      {
        name: 'Vegetable Platter',
        price: '$6.99',
        image: 'vegetable-platter.jpg',
        description: 'A mix of fresh and cooked vegetables for a fasting meal.',
      },
    ],
  },
  {
    title: 'Normal Day',
    image: doro, // Add an image for the category
    items: [
      {
        name: 'Doro Wot',
        price: '$9.99',
        image: 'doro-wot.jpg',
        description: 'Ethiopian chicken stew served with injera.',
      },
      {
        name: 'Grilled Meat',
        price: '$12.99',
        image: 'grilled-meat.jpg',
        description: 'Tender and juicy grilled meat with spices.',
      },
      {
        name: 'Rice and Curry',
        price: '$8.99',
        image: 'rice-curry.jpg',
        description: 'Rice served with a flavorful curry.',
      },
    ],
  },
  {
    title: 'Snacks',
    image: piza, // Add an image for the category
    items: [
      {
        name: 'Samosa',
        price: '$1.99',
        image: 'samosa.jpg',
        description: 'Crispy pastry filled with spiced lentils or vegetables.',
      },
      {
        name: 'Popcorn',
        price: '$0.99',
        image: 'popcorn.jpg',
        description: 'Freshly popped and lightly salted.',
      },
      {
        name: 'Chips',
        price: '$2.49',
        image: 'chips.jpg',
        description: 'Crispy and golden potato chips.',
      },
    ],
  },
  {
    title: 'Hot Drinks',
    image: coffee, // Add an image for the category
    items: [
      {
        name: 'Coffee',
        price: '$2.99',
        image: 'coffee.jpg',
        description: 'Ethiopian brewed coffee served hot.',
      },
      {
        name: 'Tea',
        price: '$1.99',
        image: 'tea.jpg',
        description: 'Traditional spiced tea.',
      },
      {
        name: 'Hot Chocolate',
        price: '$3.49',
        image: 'hot-chocolate.jpg',
        description: 'Rich and creamy hot chocolate.',
      },
    ],
  },
  {
    title: 'Cold Drinks',
    image: wine, // Add image for the category
    items: [
      {
        name: 'Juice',
        price: '$3.99',
        image: 'juice.jpg',
        description: 'Freshly squeezed seasonal juice.',
      },
      {
        name: 'Soda',
        price: '$1.99',
        image: 'soda.jpg',
        description: 'Chilled and refreshing soda.',
      },
      {
        name: 'Smoothie',
        price: '$4.99',
        image: 'smoothie.jpg',
        description: 'Blended fresh fruits with yogurt or milk.',
      },
    ],
  },
  {
    title: 'Fresh Foods',
    image: 'fresh-foods.jpg', // Add an image for the category
    items: [
      {
        name: 'Garden Salad',
        price: '$5.99',
        image: 'garden-salad.jpg',
        description: 'A mix of fresh greens and vegetables.',
      },
      {
        name: 'Fruit Salad',
        price: '$4.99',
        image: 'fruit-salad.jpg',
        description: 'Seasonal fruits mixed together.',
      },
      {
        name: 'Avocado Toast',
        price: '$3.99',
        image: 'avocado-toast.jpg',
        description: 'Toast topped with smashed avocado and spices.',
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
              <img src={category.image} alt={category.title} className="category-image" />
              </div>
            </div>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            
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
