import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar" style={{ padding: "10px" }}>
      <Link to="/" style={{ padding: "10px" }}>
        shop
      </Link>

      <Link to="/cart" style={{ padding: "10px" }}>
        cart
      </Link>
      <Link to="/about" style={{ padding: "10px" }}>
        about
      </Link>
      <Link to="/contact" style={{ padding: "10px" }}>
        contact
      </Link>
    </div>
  );
};

export default Navbar;
