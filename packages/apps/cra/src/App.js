import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Look ma I'm running along <code>Next.js</code> apps in this cool
          monorepo.
        </p>
      </header>
    </div>
  );
}

export default App;
