import "./navbar.scss";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <div className="logo">
          <a href="#about">
            <h2>Babis Tsourlis</h2>
          </a>
        </div>
        <Burger />
      </nav>
    </header>
  );
};

export default Navbar;
