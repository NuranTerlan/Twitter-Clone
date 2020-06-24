import React from "react";
import cn from "classnames";
import CONST from "../constants/index";
import useWindowSize from "./../hooks/useWindowSize";

import styles from "./layout.module.css";

import SideBar from "./../components/col-sidebar";
import Main from "./../components/col-main";
import Extra from "./../components/col-extra";

const Layout = ({ children }) => {
  const size = useWindowSize();

  return (
    <div className={cn(styles.layout)}>
      <SideBar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</SideBar>
      <Main>
        {children}
      </Main>
      {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
    </div>
  );
};

export default Layout;
