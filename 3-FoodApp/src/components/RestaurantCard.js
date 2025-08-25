import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  const {
    cloudinaryImageId,
    name,
    locality,
    areaName,
    cuisines,
    avgRating,
  } = data;
  return (
    <div className="restaurant-card">
      <img src={IMG_URL + cloudinaryImageId} className="restaurant-card-img" />
      <div>{name}</div>
      <div>{locality + ", " + areaName}</div>
      <div>{cuisines?.slice(0,3)?.join(", ")}</div>
      <div>{avgRating}</div>
    </div>
  );
};

export default RestaurantCard;
