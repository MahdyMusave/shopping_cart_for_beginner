import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar" style={{ padding: "10px" }}>
      <Link to="/home" style={{ padding: "10px" }}>
        home
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
