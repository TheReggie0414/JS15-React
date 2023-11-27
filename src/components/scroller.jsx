import { useRef } from "react";
import { Block } from "./block";

export const Scroller = () => {
  const blockOneRef = useRef(null);
  const blockTwoRef = useRef(null);
  const blockThreeRef = useRef(null);

  const onClick = (ref) => {
    ref &&
      ref.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div>
      <div style={{ position: "fixed", top: 0 }}>
        <button onClick={() => onClick(blockOneRef.current)}>
          Scroll to block 1
        </button>
        <button onClick={() => onClick(blockTwoRef.current)}>
          Scroll to block 2
        </button>
        <button onClick={() => onClick(blockThreeRef.current)}>
          Scroll to block 3
        </button>
      </div>
      <Block text="1" ref={blockOneRef} />
      <Block text="2" ref={blockTwoRef} />
      <Block text="3" ref={blockThreeRef} />
    </div>
  );
};
