import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductInfo.css";
import useProduct from "../utiles/useProduct";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utiles/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const ProductInfo = () => {
  const { id } = useParams();
  const cart = useSelector((state) => state.cart);
  const product = useProduct(id);

  const items = useSelector((state) => state.cart);
  // console.log(items, "work");

  const dispatch = useDispatch();

  function addCartHandler(product) {
    dispatch(addItem(product));
    toast.success("Item added to the cart!");
  }

  const discountedPrice =
    product?.price - (product?.price * product?.discountPercentage) / 100;
  return (
    <>
      {product ? (
        <div className="product-detail">
          <div className="product-images">
            <img src={product?.thumbnail} alt={product?.title} />
            <div className="d-flex  justify-content-around w-100">
              <button type="button" className="btn btn-success btn-sm">
                Buy Now
              </button>
              <Link to ="/cart">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => addCartHandler(product)}
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
          <div className="product-info">
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <div className="product-meta">
              <p>
                {" "}
                Price:{" "}
                <span className="price-off">₹{product?.price * 82} </span>
                <span className="price-org">
                  ₹{discountedPrice * 82} ({product?.discountPercentage}% off)
                </span>
              </p>

              {/* <p>Price: ${product?.price}</p>
              <p>Discount: {product?.discountPercentage}% off</p> */}
              <p>
                Rating:{" "}
                <span className="bg-success p-1 text-light rounded ">
                  {product?.rating} ⭐
                </span>
              </p>
              <p>Stock: {product?.stock} available</p>
              <p>Brand: {product?.brand}</p>
              <p>Category: {product?.category}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p> // Display a loading message while data is being fetched
      )}
    </>
  );
};

export default ProductInfo;
