import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItems } from "../utiles/cartSlice";

const Header = () => {
  const cart = useSelector((state) => state.cart); // Access the "cart" state property
  // console.log(cart.items);

  return (
    <nav className="text-bg-primary">
      <div>
        <h1>Logo</h1>
      </div>
      <ul>
        <Link className="text-light text-decoration-none" to="/">
          <li>Home</li>
        </Link>
        <Link className="text-light text-decoration-none" to="/about">
          <li>About</li>
        </Link>
        <Link className="text-light text-decoration-none" to="/contact">
          <li>Contact</li>
        </Link>

        <Link className="text-light text-decoration-none" to="/cart">
          Cart <FaCartShopping className="fs-4" /> <sup className="bg-danger rounded p-1">{cart.items.length}</sup>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
