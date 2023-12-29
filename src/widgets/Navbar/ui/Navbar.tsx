import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/config/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "../../../shared/config/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/config/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.RED} to={"/"} className={cls.mainLink}>Main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>About</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
