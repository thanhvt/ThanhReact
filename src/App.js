import logo from './logo.svg';
import './App.css';
import HelloWorld from './Hallo';
import FuncCom from './FuncCom';
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Navigate from './Navigate';
import AboutComponent from './About';
import ContactsComponent from './Contact';
import TestRedux from './TestRedux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld hoTen="Day la ho va  ????"></HelloWorld>
        {FuncCom()}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React. OK Thanh đã bắt đầu học React. Move sang man hinh tiep theo
        </a>
      </header>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate />}>
            <Route index element={<TestRedux />} />

            <Route path="AboutComp" element={<AboutComponent />} />

            <Route path="Contact" element={<ContactsComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
