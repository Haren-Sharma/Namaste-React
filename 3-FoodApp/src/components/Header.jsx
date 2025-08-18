const Header = () => {
  /*
     Header
    -Logo
    -NavItems
        -Home
        -About
        -Cart
    */
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/3063/3063252.png"
        />
      </div>
      <div className="nav-container">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
