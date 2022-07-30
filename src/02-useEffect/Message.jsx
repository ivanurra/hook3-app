import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3 className="mt-3">User already exists!</h3>
    </>
  );
};
