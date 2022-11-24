import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children, fontSize } = props;
  const contentStyle = {
    color,
    fontSize
  };

  return <p style={contentStyle}>{children}</p>;
};
