import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';
import '.././customStyle.css'

interface FoodItem {
  imgLink: string;
  name: string;
}
const showCaseImages = [
  {
    "imgLink": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
    "name": "Pizza"
  },
  {
    "imgLink": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png",
    "name": "Burger"
  },
  {
    "imgLink": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
    "name": "Pasta"
  },
  {
    "imgLink": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
    "name": "Sushi"
  },
  {
    "imgLink": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
    "name": "Salad"
  },
  {
    "imgLink": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
    "name": "Steak"
  },
  {
    "imgLink": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
    "name": "Tacos"
  },
  {
    "imgLink": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
    "name": "Sandwich"
  },
  {
    "imgLink": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
    "name": "Soup"
  },
  {
    "imgLink": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
    "name": "Ramen"
  },
  {
    "imgLink": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
    "name": "Curry"
  }
]

function FoodList():JSX.Element{
  const [foodItems, setFoodItems] = useState<FoodItem[]>(showCaseImages);

  // useEffect(() => {
  //   // Make the API call here
  //   fetch('http://localhost:3001/api/samplefoods')
  //     .then((response) => response.json())
  //     .then((data) => setFoodItems(data));
  // }, []);

  return (
    <div className=' my-8 font-semibold text-xl'>
    <h2>Hungry? Your Favorite Dishes are Just a Click Away!</h2>
    <div className='flex overflow-x-scroll scroll-smooth space-x-4 p-4 no-scrollbar'>
        
            {foodItems.map((item, index) => (
            <SmallCard key={index} imgLink={item.imgLink} name={item.name}/>
        ))}
    </div>
    </div>
  );
};

export default FoodList;
