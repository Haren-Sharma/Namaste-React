const RestaurantCard = ({
  data: { name, image, cuisine, location, discount, rating },
}) => {
  console.log("🚀 ~ RestaurantCard ~ rating:", rating)
  console.log("🚀 ~ RestaurantCard ~ cuisine:", cuisine);
  console.log("🚀 ~ RestaurantCard ~ image:", image);
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
