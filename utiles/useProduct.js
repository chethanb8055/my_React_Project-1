import { useState, useEffect } from "react";

const useProduct = (id) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  //   console.log(id)
  async function getData() {
    try {
      const response = await fetch("https://dummyjson.com/products/" + id);
      const data = await response.json();

      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  }
  return product;
};

export default useProduct;
