import "./App.css";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type={"primary"}/>
        <br />
        <Button type={"secondary"}/>
      </div>
      <hr />
      <div className="alert-components-section flex flex-col gap-5 items-center my-10 ">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type={"error"}/>
        <Alert type={"warning"}/>
        <Alert type={"info"}/>
        <Alert type={"success"}/>
      </div>
    </div>
  );
}

export default App;
