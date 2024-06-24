import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import MenuCard from './MenuCard';
import SearchBar from './SearchBar';
import PageHeader from './PageHeader';
import Sprinkle from "../images/sprinkle.jpg";
import axios from 'axios';
import { fetchRestaurantById } from '../api/Restaurant';

interface RestaurantDetails {
    _id:string;
    name: string;
    location: string;
    cuisine: string;
    image: string;
    menu: MenuItem[];
  }
  interface MenuItem {
    name: string;
    price: number;
    isVeg: boolean;
    description: string;
    image:string;
  }
function Restaurant() {
const { id } = useParams();
const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetails>();
const backgroundImageUrl = require('../images/sprinkle.jpg').default;

const token = localStorage.getItem('token');
useEffect(() => {
    // Make the API call using Axios with authorization header
        fetchRestaurantById(id)
          .then((data) => setRestaurantDetails(data))
          .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <>
    <PageHeader/>
    {/* <div  style={{
          backgroundImage: `url(${Sprinkle})`,
          backgroundSize: 'repeat',
          backgroundPosition: 'center',
          height:'100vh'
        }}> */}
    <div>
    <img className="w-full h-80 object-cover" src={restaurantDetails?.image} alt={`${restaurantDetails?.name} image`} />
    </div>
             <div className='mx-72' >
    <div className='my-4'>
        <SearchBar/>
    </div>
   
    {restaurantDetails && restaurantDetails.menu.map((menuItem, index) => (
        <>
      <MenuCard key={index} {...menuItem} />
      {/* <hr/> */}
      </>
    ))}

  </div>
    {/* </div> */}
   
  </>
  )
}

export default Restaurant;