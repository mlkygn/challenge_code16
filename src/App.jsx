import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="basis-3/4">
            <Main />
          </div>
          <div className="basis-1/4">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
