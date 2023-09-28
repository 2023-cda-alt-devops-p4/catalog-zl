import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);

const body = document.querySelector("body");

if (process.env.NODE_ENV === "development") {
  body?.classList.add("dev");
}
