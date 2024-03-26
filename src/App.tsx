import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [visibility, setVisibity] = useState(false);
  return (
    <div>
      {visibility && <Alert clearAlert={() => setVisibity(false)} />}
      <Button onClickBtn={() => setVisibity(true)} />
    </div>
  );
}

export default App;
