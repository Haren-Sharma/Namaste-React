import { getUser } from "../context/UserContextProvider";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const Header = ({setDarkMode}) => {
  const onlineStatus = useOnlineStatus();
  const {userName}=getUser();
  const cart=useSelector(store=>store?.cart?.items);    //subscribing to the store
  console.log(cart)
  /* 
     Header
    -Logo
    -NavItems
        -Home
        -About
        -Contact
        -Cart
    */
  return (
    <div className="bg-amber-300 flex items-center p-2">
    
        <img className="logo" src={LOGO_URL} />
      
      <div className=" ml-auto">
        <ul className="flex gap-12">
          <li>
            Status:
            {
              <span
                className=""
              >
                {onlineStatus ? " Online" : " Offline"}
              </span>
            }
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart<span className="font-bold">{cart?.length>0 && `-${cart?.length} Items`}</span></Link>
          </li>
          <li>
            <span className="active:opacity-70 border-black" onClick={()=>setDarkMode(d=>!d)}>Mode</span>
          </li>
          <li>User Logged In:{userName}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
