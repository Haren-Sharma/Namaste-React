const RestaurantCard = ({
  data: { name, image, cuisine, location, discount, rating },
}) => {
  return (
    <div className="restaurant-card">
      <img src={image} className="restaurant-card-img" />
      <div>{name}</div>
      <div>{location}</div>
      <div>{cuisine?.join(", ")}</div>
      <div>{discount}</div>
      <div>{rating}</div>
    </div>
  );
};

export default RestaurantCard;
