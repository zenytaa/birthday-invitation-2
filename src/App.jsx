import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./Routers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
