import React from 'react';
import { LeafyGreen,Drumstick } from 'lucide-react';
interface MenuCardProps {
  name: string;
  price: number;
  isVeg: boolean;
  description: string;
  image:string;
}

const MenuCard: React.FC<MenuCardProps> = ({ name, price, isVeg,image, description }) => {
  return (
    <div className="w-full rounded overflow-hidden m-4 shadow-lg flex bg-white">
    <img className="w-32 h-32 object-cover" src={image} alt={`${name} image`} />
    <div className="px-4 py-2">
      <div className="flex items-center mb-2">
        <div className="font-bold text-xl">{name}</div>
        <span className='m-2'>
            {isVeg ? <LeafyGreen className='text-green-500' size={20}/> : <Drumstick className='text-red-500' size={20}/>}
        </span>
          
      </div>
      <div className="text-gray-700 text-base">{description}</div>
      <div className="text-gray-700 text-base">Price: ${price}</div>
    </div>
  </div>
  );
};

export default MenuCard;
