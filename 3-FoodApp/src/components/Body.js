import RestaurantCard from "./RestaurantCard";
import res from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredListRestaurants, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setRestaurants(res);
    setFilteredList(res);
    //we can use an external api as well
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
        return restaurants.filter((r) => r.rating > 4.4);
      });
    }
  };
  const search = () => {
    const filtered = restaurants?.filter((res) =>
      res.name?.toLowerCase().includes(searchText.toString())
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
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
