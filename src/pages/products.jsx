import { useDispatch } from "react-redux";
import { fetchProduct } from "../store/products/action";
import { useProductsSelector } from "../store/products/selectors";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useProductsSelector();
  console.log("🚀 ~ file: products.jsx:5 ~ Products ~ products==>>", products);

  return (
    <button
      onClick={() => {
        dispatch(fetchProduct());
      }}
    >
      Load Products
    </button>
  );
};
