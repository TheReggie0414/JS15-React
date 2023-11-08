export const List = ({ list }) => {
  return list.length ? (
    <ul>
      {list.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  ) : (
    <p>No products</p>
  );
};
