import React from "react";

import CONST from "../constants/index"
import Layout from "../components/layout";
import useWindowSize from "./../hooks/useWindowSize";
import SideBar from './../components/col-sidebar';
import Main from './../components/col-main';
import Extra from './../components/col-extra';

function HomePage() {
  const size = useWindowSize();

  return (
    <Layout>
      <SideBar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</SideBar>
      <Main>Main.Size : {JSON.stringify(size)}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
    </Layout>
  );
}

export default HomePage;
