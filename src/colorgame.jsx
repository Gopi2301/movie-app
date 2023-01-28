import { useState } from "react";
function ColorGame() {
    const [color, setcolor] = useState("green");
    const styles = {
      background: color,
    };
    const ColorList = ["green", "crimson", "skyblue"];
  
    return (
      <div>
        <input
          type="text"
          style={styles}
          onChange={(event) => setcolor(event.target.value)}
        />
        {ColorList.map((ele,index) => (
          <ColorBox key={index}clr={ele} />
        ))}
      </div>
    );
  }
  function ColorBox({ clr }) {
    const styles = {
      width: "250px",
      heigth: "50px",
      margin: "5px 0",
      background: clr,
    };
    return <div style={styles}>hi</div>;
  }
  export {ColorGame, ColorBox};