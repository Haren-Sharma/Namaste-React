import { useState } from "react";
import RestaurantCategoryItem from "./RestaurantCategoryItem";

const ResttaurantCategory = ({ title, items }) => {
  const [accVisible, setAccVisible] = useState(false);
  return (
    <div className="w-6/12  border-1  mb-4">
      <div
        className="p-2 flex justify-between border-b-1"
        onClick={() => setAccVisible((prev) => !prev)}
      >
        <div>{title + " (" + items?.length + ")"}</div>
        <span>{accVisible ? "-" : "+"}</span>
      </div>
      {accVisible && (
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
