import { useParams } from "react-router";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  /*
    ✅ Rule of Thumb
    
    Use <Link> for static navigation (menus, links, lists).
    Use useNavigate for dynamic/programmatic navigation (after events, conditions, API responses).
  */
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginTop: 10 }}>{restaurant?.name}</h1>
      <h3 style={{ marginTop: 20, fontStyle: "italic" }}>Menu Items:</h3>
      <div style={{ marginTop: 10 }}>
        {restaurant?.cuisines?.map((c) => {
          return <li key={c}>{c}</li>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
