import { useEffect } from "react";
import Header from "./components/header/Header";

function App() {
  const test = (e: number) => {
    alert("You have clicked on: " + e);
  };

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

      <div className="grid grid-cols-2 gap-8 p-8">
        {arr.map((e) => (
          <span
            onClick={() => test(e)}
            key={e}
            className="p-8 shadow-md cursor-pointer hover:bg-blue-50 active:scale-90 transition-all duration-200 bg-white text-4xl rounded-xl flex items-center justify-center"
          >
            {e}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
