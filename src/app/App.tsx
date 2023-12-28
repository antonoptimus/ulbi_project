import { classNames } from "shared/config/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;
