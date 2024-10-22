import "./App.css";
import Button from "./components/Button"
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type ="primary"/>
        <Button/>
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert/>
      </div>
    </div>
  );
}

export default App;
