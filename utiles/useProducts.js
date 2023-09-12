// useProductData.js
import { useEffect, useState } from "react";

export function useProducts() {
  const [allProduct, setAllProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  

  useEffect(() => {
    getData();

  }, []);


  useEffect(()=>{
    filterData()
  },[searchText])

function filterData() {
    const fetlter = allProduct.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterProduct(fetlter);
    // console.log(fetlter)
  }

  async function getData() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const jsonData = await response.json();
      setAllProduct(jsonData.products);
      setFilterProduct(jsonData.products);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  return { allProduct, filterProduct, searchText, setSearchText};
}
