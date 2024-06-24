import axios from 'axios';
import { baseUrl } from '../constants/constants';
import apiRequest from '../api/apiRequest';
interface Menu {
  name: string;
  price: string;
  isVeg: boolean;
  description: string;
  image?: string;
}

interface Restaurant {
  name: string;
  location: string;
  cuisine: string;
  image?: string;
  menu: Menu[];
}

export async function fetchRestaurants() {
  return apiRequest('get', '/restaurant');
}

export async function addRestaurant(restaurantData: Restaurant) {
  return apiRequest('post', '/restaurant', restaurantData);
}

export async function fetchRestaurantById(id: any) {
    return apiRequest('get', `/restaurant/${id}`);
  }