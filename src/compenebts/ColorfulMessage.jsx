import React from "react";

const ColorfulMessage = (props) => {
  const { color, children, fontSize } = props;
  const contentStyle = {
    color,
    fontSize
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
