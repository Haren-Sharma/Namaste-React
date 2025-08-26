import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SWIGGY_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  //as we are doing just the devlopment so we are going to use the same mock api
  //in reality there will be a diffrent api developed to fetch each restaurant and its menu items with the help of it's resId
  const [restaurant, setRestaurant] = useState({});
  const { resId } = useParams();

  const fetchRestaurant = async () => {
    const raw = await fetch(SWIGGY_API_URL);
    const data = await raw.json();
    const res =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.find(
        (r) => r?.info?.id === resId
      ) ?? {};
    setRestaurant(res?.info);
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{marginTop:10}}>{restaurant?.name}</h1>
      <h3 style={{marginTop:20,fontStyle:"italic"}}>Menu Items:</h3>
      <div style={{marginTop:10}}>
        {restaurant?.cuisines?.map((c) => {
          return <li key={c}>{c}</li>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
