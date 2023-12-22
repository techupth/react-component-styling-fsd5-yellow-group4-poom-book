import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <h1>Primary Button</h1>
        <Button type="primary-button" />
      </div>

      <div className="alert-components-section">
        <h1>Secondary Button</h1>
        <Button type="secondary-button" />
      </div>
      <div className="all-alert">
        <Alert type="default" childen="This is error alert box" />
        <Alert type="hover" childen="This is warning alert box" />
        <Alert type="error" childen="This is info alert box" />
        <Alert type="focus" childen="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
