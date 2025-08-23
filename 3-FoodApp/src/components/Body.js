import RestaurantCard from "./RestaurantCard";
import res from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(res);
  /*
  Body
  -Search
  -Restaurant Container
    -Restaurant Cards
  */
  const filterTopRatedRes = (e) => {
    if (e.target.classList?.contains("btn-filter-selected")) {
      e.target.classList.remove("btn-filter-selected");
      setRestaurants(res);
    } else {
      e.target.classList.add("btn-filter-selected");
      setRestaurants((prev) => {
        return prev.filter((r) => r.rating > 4.4);
      });
    }
  };
  const search = (text) => {
    setRestaurants((prev) => {
      return prev.filter((res) => res.name.includes(text));
    });
  };
  return (
    <div className="body">
      <input
        type="text"
        id="search-box"
        placeholder="Search any restaurant"
        onChange={(e) => search(e.target.value)}
      />
      <button id="filter-top-rated" onClick={filterTopRatedRes}>
        Top Rated
      </button>
      <div id="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
