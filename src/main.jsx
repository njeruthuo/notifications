import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import Context from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <App />
  </Context>
);
