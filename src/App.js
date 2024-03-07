import logo from './logo.svg';
import './App.css';
import SubmitButton from './components/SubmitButton';
import OpenAIComponent from './services/API_Openai.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
        <OpenAIComponent></OpenAIComponent>
      </header>
      <SubmitButton></SubmitButton>
    </div>
  );
}

export default App;
