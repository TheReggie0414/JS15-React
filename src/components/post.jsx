import { useUserContext } from "../provider/user";

export const Post = ({ title, authorId, body }) => {
  const { user } = useUserContext();
  const author = authorId === user?.id;

  return (
    <article
      style={{
        border: "1px solid black",
        borderRadius: "4px",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex" }}>
        <h1>{title}</h1>
        {author && <span>Author</span>}
      </div>
      <p>{body}</p>
    </article>
  );
};
