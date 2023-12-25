import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./components/AboutPage/AboutPage.async";
import { MainPageAsync } from "./components/MainPage/MainPage.async";
import "./index.scss";
import { Suspense } from "react";


const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>

      <Suspense fallback={<div>Loading... </div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
