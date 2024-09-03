import React from "react";

type Props = {
  size?: "small" | "medium";
};

function Spinner({ size = "medium" }: Props) {
  return <div className={`spinner ${size}`} />;
}

export default Spinner;

// import React from "react";

// type Props = {
//   size?: "small" | "medium";
// };

// function Spinner({ size = "medium" }: Props) {
//   const spinnerClasses = `spinner ${size}`;
//   const spinnerStyles = {
//     margin: size === "small" ? "0" : "3.2rem auto 1.6rem",
//     width: size === "small" ? "20px" : "60px",
//     aspectRatio: 1,
//     borderRadius: "50%",
//     border:
//       size === "small"
//         ? "2px solid theme('colors.white')"
//         : "8px solid theme('colors.primary.900')",
//     borderRightColor:
//       size === "small" ? "transparent" : "theme('colors.primary.200')",
//     animation: "rotate 1s infinite linear",
//   };

//   return <div className={spinnerClasses} style={spinnerStyles} />;
// }

// export default Spinner;
