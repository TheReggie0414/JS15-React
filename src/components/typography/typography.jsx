export const Typography = (props) => {
  const { title, text, visible, children } = props;
  console.log("🚀 ~ file: typography.jsx:2 ~ Typography ~ props==>>", props);
  return (
    visible && (
      <>
        {title && <h1>{title}</h1>}
        <p>{text}</p>
        {children}
      </>
    )
  );
};
