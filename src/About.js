import React, { useState, useEffect, useContext } from "react";
import MyContext from "./myContext";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";

function AboutComponent(props) {
  const [data, setData] = useState({});
  const [user, setUser] = useState("thanh");
  const [iValue, setIValue] = useState("Default Value");

  // const AppContext = React.createContext({ foo: 'bar', "label": 'thanhvt0210' })
  const GetContext = useContext(MyContext);
  const { updateContext } = useContext(MyContext);

  const aboutContactCapture = useSelector(state => state.contactCapture)
  const getData = async () => {
   
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    setData(response.data);
    console.log("data", response.data);
  };

  useEffect(() => {
    // getData();
    console.log('aboutContactCapture', aboutContactCapture);
    setIValue(aboutContactCapture);
  }, []);

  useEffect(() => {
    console.log('iValue thay đổi ', iValue)
  }, [iValue])

  let check = (THOI_GIAN) => {
    console.log("user", user);
    setUser("anh");
    console.log("user", user);
    setData({ ...data, username: THOI_GIAN });
    console.log("data", data);
    // GetContext({
    //   THOI_GIAN: iValue,
    //   GIA_TRI_I: iValue
    // })

  };

  const handleInputChange = (e) => {
    setIValue(e.target.value);
  }

  return (
    // <p>This is a simple about component.</p>
    <MyContext.Consumer>
      {({ GIA_TRI_I, THOI_GIAN }) => (
        <div>
          <h1>About Component {GIA_TRI_I}</h1>
          <p>Đây là context của My Context: {GetContext.THOI_GIAN}</p>
          <input type="text"  value={iValue || ''} onChange={handleInputChange}/>
          <button onClick={(e) => check(THOI_GIAN)}>About button</button>
        </div>
      )}
    </MyContext.Consumer>
  );
}

// const mapStateToProps = state => {
//   return {
//      expenses: state
//   };
// };

export default AboutComponent;