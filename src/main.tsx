import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeTheme } from "./lib/theme";

try {
  initializeTheme();
} catch (error) {
  console.error("Theme initialization failed", error);
}

createRoot(document.getElementById("root")!).render(
  <App />,
);
