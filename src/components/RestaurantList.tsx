import React, { useEffect, useState } from 'react';
import '.././customStyle.css'
import RestaurantCard from './RestaurantCard';
import axios from 'axios';
import { fetchRestaurants } from '../api/Restaurant';
interface FoodItem {
  _id: string;
  name: string;
  location: string;
  cuisine: string;
  image: string;
}

function RestaurantList():JSX.Element{
  const [restraunts, setRestaurants] = useState<FoodItem[]>([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetchRestaurants()
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className=' my-8 font-semibold text-xl'>
    <h2>Top Restaurants near you!</h2>
    <div className='flex flex-wrap justify-between items-center p-4 '>
            {restraunts.map((item, index) => (
            <RestaurantCard key={index} _id={item._id} name={item.name} location={item.location} cuisine={item.cuisine} image={item.image}/>
        ))}
    </div>
    </div>
  );
};

export default RestaurantList;
