import { useEffect } from "react";
import HomepageView from "./views/HomepageView";
import Header from "./components/header/Header";
import LoginView from "./views/LoginView";
import SignUPView from "./views/SignUPView";
import { onAuthStateChanged, auth } from "../src/firebase/firebaseConfig";

import * as React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SearchHistory from "./views/SearchHistory";
import SettingsView from "./views/SettingsView";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.email);
    console.log(user.uid);
  } else {
    console.log("User not found");
  }
});

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

  const Layout = ({ children }: { children?: React.ReactNode }) => {
    return (
      <>
        <Header />

        {children || <Outlet />}
      </>
    );
  };

  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomepageView />,
        },
        {
          path: "/signup",
          element: <SignUPView />,
        },
        {
          path: "/login",
          element: <LoginView />,
        },
        {
          path: "/search-history",
          element: <SearchHistory />,
        },
        {
          path: "/settings",
          element: <SettingsView />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
