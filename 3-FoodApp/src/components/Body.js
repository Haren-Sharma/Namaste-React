import RestaurantCard from "./RestaurantCard";
import res from "../utils/mockData";

const Body = () => {
  /*
  Body
  -Search
  -Restaurant Container
    -Restaurant Cards
  */
  return (
    <div className="body">
      <div id="search-box">Search Box</div>
      <div id="restaurant-container">
        {res.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
