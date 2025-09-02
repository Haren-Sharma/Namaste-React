import RestaurantCard from "./RestaurantCard";
// import res from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import { useNavigate } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
import TopRatedRestaurantCardComponent from "./TopRatedRestaurantCardComponent";
import { getUser } from "../context/UserContextProvider";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredListRestaurants, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();

  const { userName, setUser } = getUser();

  const TopRatedRestaurantCard =
    TopRatedRestaurantCardComponent(RestaurantCard); //higher order component

  const fetchRes = async () => {
    const res = await fetch(SWIGGY_API_URL);
    const data = await res.json();
    console.log("🚀 ~ fetchRes ~ d̥ata:", data);
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
      res?.info?.name
        ?.toLowerCase()
        .includes(searchText.toString().toLowerCase())
    );
    setFilteredList(filtered);
  };
  const navigateToMenuPage = (resId) => {
    navigate(`/restaurants/${resId}`);
  };
  if (onlineStatus === false) return <h1>User Not Online</h1>;
  return (
    <div className="body">
      <div className="body-header-container">
        <input
          className="border-2"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="border-2 px-4" onClick={search}>
          Search
        </button>
        <button id="filter-top-rated" onClick={filterTopRatedRes}>
          Top Rated
        </button>
        <input
          className="border-2 p-4"
          type="text"
          value={userName}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div id="restaurant-container">
        {filteredListRestaurants.map((restaurant) =>
          /*
          Dynmaic Routing:
            -Link
            -useNavigate()
          */
          restaurant?.info?.avgRating > 4.4 ? (
            <TopRatedRestaurantCard
              handleClick={() => navigateToMenuPage(restaurant?.info?.id)}
              key={restaurant?.info?.id}
              data={restaurant?.info}
            />
          ) : (
            <RestaurantCard
              handleClick={() => navigateToMenuPage(restaurant?.info?.id)}
              key={restaurant?.info?.id}
              data={restaurant?.info}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
