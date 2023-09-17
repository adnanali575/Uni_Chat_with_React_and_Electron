import { useEffect } from "react";
import HomepageView from "./views/HomepageView";
import Header from "./components/header/Header";
// import LoginView from "./views/LoginView";
// import SignUPView from "./views/SignUPView";

function App() {
  useEffect(() => {
    const disableTextSelection = () => {
      document.body.style.userSelect = "none";
    };
    disableTextSelection();

    return () => {
      document.removeEventListener("selectstart", disableTextSelection);
    };
  }, []);

  return (
    <>
      <Header />
      {/* <LoginView /> */}
      {/* <SignUPView /> */}
      <HomepageView />
    </>
  );
}

export default App;
