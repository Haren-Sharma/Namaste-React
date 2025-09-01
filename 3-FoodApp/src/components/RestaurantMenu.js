import { useParams } from "react-router";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import categories from "../utils/mockData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showItemIndex, setShowItemIndex] = useState(-1);

  const onAccorDianClick = (idx,show) => {
    if(!show) setShowItemIndex(idx)
      else setShowItemIndex(-1)
  };
  /*
    ✅ Rule of Thumb
    
    Use <Link> for static navigation (menus, links, lists).
    Use useNavigate for dynamic/programmatic navigation (after events, conditions, API responses).
  */
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-5 font-bold text-2xl">{restaurant?.name}</h1>
      {
        /*categories*/
        categories?.map((c,index) => {
          return (
            <RestaurantCategory
              key={c.id}
              title={c.title}
              items={c.items}
              showItems={index===showItemIndex ? true : false}
              onClick={(show)=>onAccorDianClick(index,show)}
            />
          );
        })
      }
    </div>
  );
};

export default RestaurantMenu;
