import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { addRestaurant } from '../api/Restaurant';

function AdminPage() {
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    location: '',
    cuisine: '',
    image: '',
    menu: [
      {
        name: '',
        price: '',
        isVeg: true,
        description: '',
        image: ''
      }
    ]
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setRestaurantData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleMenuChange = (index:any, e:any) => {
    const { name, value } = e.target;
    setRestaurantData((prevState) => ({
      ...prevState,
      menu: prevState.menu.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await addRestaurant(restaurantData);
      console.log('Restaurant added successfully');
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };
  
  const addMenuItem = () => {
    setRestaurantData((prevState) => ({
      ...prevState,
      menu: [...prevState.menu, {name: '', price: '', isVeg: true, description: '', image: '' }]
    }));
  };

  return (
    <div 
    className="fixed inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20200728/pngtree-modern-abstract-line-backround-with-dark-blue-and-purple-colors-can-image_365433.jpg)`,
    }}
  >
    <div className="overflow-auto h-screen">
      <div className="bg-white p-8 m-4 rounded-lg shadow-lg max-w-[850px] mx-auto my-10">
        <h2 className="text-2xl font-bold mb-6">Add Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={restaurantData.name} 
            onChange={handleChange} 
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <label className="block mb-2">Location:</label>
          <input 
            type="text" 
            name="location" 
            value={restaurantData.location} 
            onChange={handleChange} 
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <label className="block mb-2">Cuisine:</label>
          <input 
            type="text" 
            name="cuisine" 
            value={restaurantData.cuisine} 
            onChange={handleChange} 
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <label className="block mb-2">Image URL:</label>
          <input 
            type="text" 
            name="image" 
            value={restaurantData.image} 
            onChange={handleChange} 
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <h3 className="text-xl font-bold mb-4">Menu Items:</h3>
          {restaurantData.menu.map((item, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2">Item Name:</label>
              <input 
                type="text" 
                name="name" 
                value={item.name} 
                onChange={(e) => handleMenuChange(index, e)} 
                className="w-full mb-2 p-2 border border-gray-300 rounded"
              />
              <label className="block mb-2">Price:</label>
              <input 
                type="text" 
                name="price" 
                value={item.price} 
                onChange={(e) => handleMenuChange(index, e)} 
                className="w-full mb-2 p-2 border border-gray-300 rounded"
              />
              <label className="block mb-2">Description:</label>
              <input 
                type="text" 
                name="description" 
                value={item.description} 
                onChange={(e) => handleMenuChange(index, e)} 
                className="w-full mb-2 p-2 border border-gray-300 rounded"
              />
              <label className="block mb-2">Image URL:</label>
              <input 
                type="text" 
                name="image" 
                value={item.image} 
                onChange={(e) => handleMenuChange(index, e)} 
                className="w-full mb-2 p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
          <button type="button" onClick={addMenuItem} className="w-full mb-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">
            Add Menu Item
          </button>
          <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default AdminPage;
