import { getUser } from "../context/UserContextProvider";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = ({setDarkMode}) => {
  const onlineStatus = useOnlineStatus();
  const {userName}=getUser();
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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li>
            Status:
            {
              <span
                className={
                  onlineStatus
                    ? "status status-online"
                    : "status status-offline"
                }
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
            <Link to="/cart">Cart</Link>
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
