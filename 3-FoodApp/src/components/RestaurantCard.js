const RestaurantCard = ({
  data: { name, image, cuisine, location, discount, id },
}) => {
  console.log("🚀 ~ RestaurantCard ~ cuisine:", cuisine);
  console.log("🚀 ~ RestaurantCard ~ image:", image);
  return (
    <div className="restaurant-card">
      <img src={image} className="restaurant-card-img" />
      <div>{name}</div>
      <div>{location}</div>
      <div>{cuisine?.join(", ")}</div>
      <div>{discount}</div>
    </div>
  );
};

export default RestaurantCard;
