import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, fetchProduct } from "../store/productsSlice";

export const Products = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <p>Products</p>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(fetchProduct(value));
        }}
      >
        Get Product
      </button>
    </div>
  );
};
