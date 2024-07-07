import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [Text, setText] = useState();

  const changeText = () => {
    let temp = count < 0 ? "ข้อความน้อยกว่า 0 ครับ" : "";
    setText(temp);
  };

  useEffect(() => {
    console.log("1.ทำครั้งแรกและครั้งเดียว");
  }, []);

  useEffect(() => {
    console.log("2.ทำครั้งแรกและทุกครั้งที่ state เปลี่ยน");
    changeText();
  });

  useEffect(() => {
    console.log("3.ทำครั้งแรกและเมื่อเงื่อนไขมีการเปลี่ยนค่า " + count);
  }, [count > 10, Text]);

  const add = () => setCount(count + 1);

  const subtract = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
    setText("")
    ;
  };

  return (
    <div className="container">
      <h1>{Text}</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={add} type="button" className="btn btn-primary">
          Add
        </button>
        <button
          onClick={reset}
          type="button"
          className="btn btn-secondary mx-5"
        >
          Reset
        </button>
        <button onClick={subtract} type="button" className="btn btn-success">
          Subtract
        </button>
      </div>
    </div>
  );
}

export default App;
