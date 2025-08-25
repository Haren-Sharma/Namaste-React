import RestaurantCard from "./RestaurantCard";
// import res from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredListRestaurants, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchRes = async () => {
    const res = await fetch(SWIGGY_API_URL);
    const data = await res.json();
    console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchRes();
  }, []);
  /*
  Body
  -Search
  -Restaurant Container
    -Restaurant Cards
  */
  const filterTopRatedRes = (e) => {
    if (e.target.classList?.contains("btn-filter-selected")) {
      e.target.classList.remove("btn-filter-selected");
      setFilteredList(restaurants);
    } else {
      e.target.classList.add("btn-filter-selected");
      setFilteredList((prev) => {
        return restaurants.filter((r) => r.info.avgRating > 4.4);
      });
    }
  };
  const search = () => {
    const filtered = restaurants?.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toString().toLowerCase())
    );
    setFilteredList(filtered);
  };
  return (
    <div className="body">
      <div className="body-header-container">
        <input
          style={{ paddingLeft: 20, paddingRight: 20 }}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button id="filter-top-rated" onClick={search}>
          Search
        </button>
        <button id="filter-top-rated" onClick={filterTopRatedRes}>
          Top Rated
        </button>
      </div>
      <div id="restaurant-container">
        {filteredListRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} data={restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
