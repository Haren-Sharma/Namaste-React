import useOnlineStatus from "../hooks/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const onlineStatus = useOnlineStatus();
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
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
