import { useState, useEffect } from "react";
import { Drawler } from "./components/drawler";
import { Button } from "./components/button";
import { Timer } from "./components/timer";
import { Text } from "./components/text";

import "./App.css";

export const App = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const obj = { a: 1, b: 2, c: 3 };
  console.log("🚀 ~ file: App.jsx:13 ~ App ~ products==>>", products);
  const a = obj.a;

  useEffect(() => {
    console.log("count==>>", count);

    return () => {
      console.log("cleanup function count==>>", count);
    };
  }, [count]);

  useEffect(() => {
    console.log("obj==>>", a);
  }, [a]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetch("https://dummyjson.com/products");
      const products = await data.json();
      setLoading(false);
      setProducts(products.products);
    };

    loadProducts();
  }, []);

  return (
    <div>
      <Drawler open={open} setOpen={setOpen} />
      <Timer />
      {loading && <p>Loading...</p>}
      {products && <p>Products {products.length}</p>}
      {count < 10 && (
        <Button
          onClick={() => {
            setCount((prevState) => prevState + 1);
            setCount((prevState) => prevState + 1);
          }}
        />
      )}
      <Text count={count} />
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </button>
    </div>
  );
};

export default App;
