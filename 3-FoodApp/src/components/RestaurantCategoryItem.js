import React, { useState } from "react";

const RestaurantCategoryItem = ({ name, description, price, image }) => {
  return (
    <div className="flex justify-between items-center p-2 mb-4 border-1 rounded-xl">
      <div>
        <div className="font-semibold">{name}</div>
        <div className="italic mt-4">{description}</div>
        <div className="font-bold">{"$" + price}</div>
      </div>
      <div className="relative p-2">
        <div className="absolute bg-black text-white rounded-xl px-3 py-1 bottom-0 right-12">
          Add +
        </div>
        <img className="w-40 rounded-xl" src={image} />
      </div>
    </div>
  );
};

export default RestaurantCategoryItem;
