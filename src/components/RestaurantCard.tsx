import React from 'react';
import { Link } from 'react-router-dom';


interface RestaurantCardProps {
  _id: string;
  name: string;
  cuisine: string;
  location:string;
  image: string;

}

function RestaurantCard(
    { image, name, location,cuisine,_id }: RestaurantCardProps): JSX.Element {
  return (
    <Link to={`/restaurant/${_id}`}>
    <div className="w-[384px]  rounded overflow-hidden m-4">
      <img className="w-full h-48 object-cover" src={image} alt={`${name} image`} />
      <div className="px-6 py-4">
        {/* <div className='flex justify-between items-center'> */}
          <div className="font-bold text-xl mb-1">{name}</div>
          
        {/* </div>  */}
        <div className='text-gray-500 text-lg'>{cuisine}</div>
       
        <div className="text-gray-400 text-sm">{location}</div>
      </div>
    </div>
    </Link>
  );
}

export default RestaurantCard;
