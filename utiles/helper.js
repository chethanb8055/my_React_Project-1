
export function filterData() {
    const fetlter = allProduct.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterProduct(fetlter);
    // console.log(fetlter)
  }