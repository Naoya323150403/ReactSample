import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>sample</h1>
      <p style={contentStyle}>aaa</p>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;