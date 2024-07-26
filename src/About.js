import React, { useState, useEffect } from "react";
import MyContext from "./myContext";

export default function AboutComponent() {
  const [data, setData] = useState({});
  const [user, setUser] = useState("thanh");

  let check = (THOI_GIAN) => {
    console.log("user", user);
    setUser("anh");
    console.log("user", user);
    setData({ ...data, username: THOI_GIAN });
    console.log("data", data);
  };

  return (
    // <p>This is a simple about component.</p>
    <MyContext.Consumer>
      {({ GIA_TRI_I, THOI_GIAN }) => (
        <div>
          <h1>About Component {GIA_TRI_I}</h1>
          <p>This is a simple about component.</p>
          <button onClick={(e) => check(THOI_GIAN)}>About button</button>
        </div>
      )}
    </MyContext.Consumer>
  );
}
