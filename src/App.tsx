import { useEffect } from "react";
import HomepageView from "./views/HomepageView";
import Header from "./components/header/Header";
import LoginView from "./views/LoginView";
import SignUPView from "./views/SignUPView";

import * as React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
