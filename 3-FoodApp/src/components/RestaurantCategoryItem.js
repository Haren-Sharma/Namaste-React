import React from 'react'

const RestaurantCategoryItem = ({name,description,price,image}) => {
  return (
    <div className='flex justify-between items-center p-4 mb-4 border-1 rounded-xl'>
    <div>
      <div className='font-semibold'>{name}</div>
      <div className='italic mt-4'>{description}</div>
      <div className='font-bold'>{"$"+price}</div>
    </div>
    <img className='w-40 rounded-xl' src={image}/>
    </div>
  )
}

export default RestaurantCategoryItem