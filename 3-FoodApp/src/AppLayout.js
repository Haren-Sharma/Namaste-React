import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AppLayout = () => {
  /*
    Header
    -Logo
    -NavItems
        -Home
        -About
        -Cart

    Body
    -Search
    -Restaurant Container
        -Restaurant Cards

    Footer
    -copyright
    
    
    */
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
export default AppLayout;
