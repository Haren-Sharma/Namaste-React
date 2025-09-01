import { useParams } from "react-router";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import categories from "../utils/mockData";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  /*
    ✅ Rule of Thumb
    
    Use <Link> for static navigation (menus, links, lists).
    Use useNavigate for dynamic/programmatic navigation (after events, conditions, API responses).
  */
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-5 font-bold text-2xl">{restaurant?.name}</h1>
      {/*categories*/
        categories?.map((c)=>{
          return <RestaurantCategory key={c.id} title={c.title} items={c.items} />
        })
      }

    </div>
  );
};

export default RestaurantMenu;
