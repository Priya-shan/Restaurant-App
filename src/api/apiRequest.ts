import axios from 'axios';
import { baseUrl } from '../constants/constants';

const token=localStorage.getItem("token");
async function apiRequest(method: 'get' | 'post', url: string, data?: any) {
    const config = {
      method,
      url: `${baseUrl}${url}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    };
    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error(`Error with API request: ${method} ${url}`, error);
      throw error;
    }
  }

export default apiRequest;