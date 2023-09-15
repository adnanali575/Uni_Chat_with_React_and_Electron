import { useEffect } from "react";
import Header from "./components/header/Header";
import LoginView from "./views/LoginView";
import SignUPView from "./views/SignUPView";

function App() {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

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
      <div className="hidden justify-between text-9xl">
        <div className=" w-[25%] hidden lg:flex bg-light-green z-0 fixed left-0 top-[57px] bottom-0">
          <div className="w-full px-4 pe-4 hover:pe-[11px] overflow-x-hidden overflow-y-hidden hover:overflow-y-auto flex flex-col gap-3 rounded-md">
            {arr.map((e) => (
              <b
                key={e}
                className="px-9 py-5 bg-white rounded-md text-center text-5xl"
              >
                {e}
              </b>
            ))}
          </div>
        </div>

        <div className="min-h-screen w-full xs:w-11/12 md:w-[80%] lg:w-1/2 mx-auto p-4 flex flex-col gap-3">
          {arr.map((e) => (
            <b
              key={e}
              className="px-9 py-5 bg-white rounded-md text-center text-5xl"
            >
              {e}
            </b>
          ))}
        </div>

        <div className="p-4 w-[25%] hidden lg:flex  bg-light-green z-0 fixed right-0 top-[57px] bottom-0">
          <div className="w-full px-4 pe-4 hover:pe-[11px] overflow-x-hidden overflow-y-hidden hover:overflow-y-auto flex flex-col gap-3 rounded-md">
            {arr.map((e) => (
              <b
                key={e}
                className="px-9 py-5 bg-white rounded-md text-center text-5xl"
              >
                {e}
              </b>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
