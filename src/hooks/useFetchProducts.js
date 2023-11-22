import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      setProducts(data.products);
    };

    loadProducts();
  }, []);

  return products;
};
