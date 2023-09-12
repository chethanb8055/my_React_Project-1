import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import "./shimmer.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  MdOutlineProductionQuantityLimits,
  MdDeleteForever,
} from "react-icons/md";
import { removeItems } from "../utiles/cartSlice";
import { toast } from "react-toastify";
const Cart = () => {
  const products = useSelector((state) => state.cart.items);
//   console.log(products, "products"); // Corrected variable name to "products"
  const dispatch = useDispatch();
  function removeitemHandler(event, product) {
    event.stopPropagation();
    dispatch(removeItems(product.id));
    toast.success("item removed Successfuly");
  }
  return (
    <div className="d-flex gap-2 flex-wrap m-0 p-0 mx-auto justify-content-evenly align-items-center">
      {products.length === 0 ? (
        <Link to="/">
          <button className="btn btn-success  ">
            <MdOutlineProductionQuantityLimits /> Browse Products
          </button>
        </Link>
      ) : (
        products.map((product) => (
          <div className="parent " key={product.id}>
            <div key={product.id} className="product-size ">
              <div className="d-flex justify-content-between align-items-center my-1">
                {" "}
                <span className="fs-6">{product.title}</span>{" "}
                <button
                  className="btn btn-secondary fs-2 p-0"
                  onClick={() => removeitemHandler(event, product)}
                >
                  <MdDeleteForever />
                </button>
              </div>
              <Link className="parent" to={"/productInfo/" + product.id}>
                <img
                  className="img-fluid"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div>
                  <p className="text-success">Price: ₹{product.price * 82}</p>
                  <p>{product.brand}</p>
                  Rating:{" "}
                  <span className="bg-success p-1 text-light rounded">
                    {product?.rating} ⭐
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))
      )}
      {products.length !== 0 && (
        <Link to="/">
          <div className="box product-size">+ Add More</div>
        </Link>
      )}
    </div>
  );
};

export default Cart;
