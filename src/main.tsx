import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./font-wesome.ts";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="min-h-screen flex flex-col pt-[105px] xs:pt-[113px] md:pt-[57px] bg-gray-bg">
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");

// Use contextBridge
// window.ipcRenderer.on("main-process-message", (_event, message) => {
//   console.log(message);
// });
