export const Button = () => {
  let count = 0;

  return (
    <button
      onClick={(e) => {
        console.log("🚀 ~ file: Button.jsx:3 ~ Button ~ e==>>", e);
        count++;
      }}
    >
      Click {count}
    </button>
  );
};
