import logo from './logo.svg';
import './App.css';
import HelloWorld from './Hallo';
import FuncCom from './FuncCom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld hoTen="Day la ho va ten test"></HelloWorld>
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
    </div>
  );
}

export default App;
