import React from "react";

import NavButton from "./nav-button";
import TitleBold from "./title-bold";
import {
  Twitter,
  Home,
  Explore,
  Notifications,
  Messages,
  More,
  Profile,
  Lists,
  Bookmarks,
} from "./icons";

import styles from "./navigation.module.css";

const Navigation = ({ selectedKey }) => {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton selected={selectedKey === "home"}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "explore"}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavButton>

      <NavButton notify={15} selected={selectedKey === "notifications"}>
        <Notifications />
        <TitleBold>Notifications</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "messages"}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "bookmarks"}>
        <Bookmarks />
        <TitleBold>Bookmarks</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "lists"}>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "profile"}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "more"}>
        <More />
        <TitleBold>More</TitleBold>
      </NavButton>
    </nav>
  );
};

export default Navigation;
