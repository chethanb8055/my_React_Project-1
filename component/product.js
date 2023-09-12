import React, { useEffect, useState } from "react";
import "./Product.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utiles/helper";
import { useProducts } from "../utiles/useProducts";
import useOnline  from "../utiles/useOnline";

const Product = () => {
  const { allProduct, filterProduct, searchText, setSearchText } =
    useProducts();

const isOnline = useOnline()
if(!isOnline){
  return (<h1>Please Check Your Internet Connection</h1>)
}

  return allProduct.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="d-flex gap-2 flex-wrap m-0 p-0 mx-auto">
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            filterData();
          }}
        >
          Search
        </button>
      </div>
      {filterProduct.length === 0
        ? "no items"
        : filterProduct.map((product) => (
            <Link
              className="parent"
              key={product.id}
              to={"/productInfo/" + product.id}
            >
              <div className="parent">
                <div key={product.id} className="product-size">
                  <h5 className="fs-6">{product.title}</h5>
                  <img
                    className="img-fluid"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div>
                    <p className="text-success ">Price: ₹{product.price*82}</p>
                    <p>{product.brand}</p>
                    Rating:{" "}
                    <span className="bg-success p-1 text-light rounded ">
                      {product?.rating} ⭐
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default Product;
