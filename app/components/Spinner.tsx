import React from "react";

type Props = {
  size?: "small" | "medium";
};

function Spinner({ size = "medium" }: Props) {
  return <div className={`spinner ${size}`} />;
}

export default Spinner;
