import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./compenebts/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  //顔文字の表示・非表示
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
    if (num % 3 === 0) {
      setFaceShowFlag(true);
    } else {
      setFaceShowFlag(false);
    }
  };

  const onClickSwitvhShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

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
      <br />
      {faceShowFlag && <p>"(-""-)"</p>}
      <button onClick={onClickSwitvhShowFlag}>on/off</button>
    </React.Fragment>
  );
};

export default App;
