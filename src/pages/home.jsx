import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      {/* <a href="/contacts">Go to contacts page a tag</a> */}
      {/* <br /> */}
      {/* <Link to="/contacts?dfdsfds">Go to contacts page</Link> */}
      <Link to="/contacts">Go to contacts page</Link>
    </section>
  );
};
