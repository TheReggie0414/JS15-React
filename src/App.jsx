import { Button } from "./components/button";
import "./App.css";

export const App = () => {
  const name = "Taras";
  const lastName = "Sam";
  const fullName = `${name} ${lastName}`;
  const elem = <p>Hi</p>;
  let content = null;
  const arr = [1, 2, 3, 5, 4];

  if (Math.random() > 0.4) {
    content = elem;
  } else {
    content = <p>Bye</p>;
  }

  console.log("🚀 ~ file: App.jsx:6 ~ App ~ fullName==>>", fullName);
  return (
    <>
      <div
        id="dsdfds"
        data-id
        data-label={fullName}
        style={{ border: "1px solid red" }}
      >
        <br />
        <input />
        <h1>Hello {fullName}</h1>
        {arr.map((item) => (
          <Button key={item} />
        ))}
        {Math.random() > 0.4 ? elem : null}
        {!!arr.length && elem}
        <ul>
          {arr.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {elem}
        {content}
      </div>
      <div></div>
    </>
  );
};

// const x = 1;
// const y = 1;

// export function foo() {}

// export { x, y };

export default App;
