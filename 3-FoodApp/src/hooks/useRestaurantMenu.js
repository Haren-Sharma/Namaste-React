import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  /*
    -Made this custom hook to fetch the restaurant data 
    -So that RestaurantMenu component follows Single Responsibility Priniciple
    -As we have extracted the logic of fetching the restaurant data , tesing becomes much more efficient
    -The RestaurantMenu Component also becomes much more cleaner now as it's only responsibility is to display the menu
    */
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    //as we are doing just the devlopment so we are going to use the same mock api
    //in reality there will be a diffrent api developed to fetch each restaurant and its menu items with the help of it's resId
    const raw = await fetch(SWIGGY_API_URL);
    const data = await raw.json();
    const res =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.find(
        (r) => r?.info?.id === resId
      ) ?? {};
    setRestaurant(res?.info);
  };

  return restaurant;
};

export default useRestaurantMenu;
