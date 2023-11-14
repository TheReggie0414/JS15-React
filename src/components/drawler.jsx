export const Drawler = ({ open, setOpen }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "400px",
        background: "green",
        position: "absolute",
        left: !open ? "-200px" : "0",
      }}
    >
      <button
        onClick={() => {
          setOpen(false);
        }}
      >
        Close
      </button>
    </div>
  );
};
