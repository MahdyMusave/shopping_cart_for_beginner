import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Cart from "./page/cart";
import About from "./page/about";
import Contact from "./page/contact";
import Shop from "./page/shop";
import "./app.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
