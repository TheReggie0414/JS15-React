export const Greetings = ({ greet }) => {
  return <p>{greet ? "Hi" : "Bye"}</p>;
  // return greet ? <p>Hi</p> : <p>Bye</p>;
};
