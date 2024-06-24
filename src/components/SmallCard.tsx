import React from 'react';

interface SmallCardProps {
  imgLink: string;
  name: string

}

function SmallCard(
    { imgLink, name }: SmallCardProps): JSX.Element {
  return (
    <div className='flex-shrink-0 min-w-[150px]'>
      <img src={imgLink} alt="Small Card Image" className="w-full h-40 object-fit"  />
    </div>
  );
}

export default SmallCard;
