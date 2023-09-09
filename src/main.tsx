import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./font-wesome.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="min-h-screen pt-[57px] bg-[#f0f2f5]">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
