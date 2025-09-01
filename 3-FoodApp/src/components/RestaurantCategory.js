import { useState } from "react";
import RestaurantCategoryItem from "./RestaurantCategoryItem";

const ResttaurantCategory = ({ title, items,showItems,onClick }) => {
  return (
    <div className="w-6/12  border-1  mb-4">
      <div
        className="p-2 flex justify-between border-b-1"  onClick={()=>onClick(showItems)}
      >
        <div>{title + " (" + items?.length + ")"}</div>
        <span>{showItems ? "-" : "+"}</span>
      </div>
      {showItems && (
        <div className="p-4">
          {items?.map((item) => {
            return <RestaurantCategoryItem key={item?.id} {...item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ResttaurantCategory;
