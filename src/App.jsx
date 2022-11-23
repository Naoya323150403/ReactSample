import React, { useState } from "react";
import ColorfulMessage from "./compenebts/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>sample</h1>
      <ColorfulMessage color="blue" fontsize="20px">
        お元気ですか?
      </ColorfulMessage>
      <ColorfulMessage color="red" fontsize="1px">
        元気です
      </ColorfulMessage>
      <p>{num}</p>

      <button onClick={onClickButton}>カウントアップ</button>
    </React.Fragment>
  );
};

export default App;
