import { useParams } from "react-router-dom";

export const User = () => {
  const params = useParams();
  console.log("prams==>>", params);
  const name = `${params.id}`.toUpperCase();
  return <p>{name}</p>;
};
