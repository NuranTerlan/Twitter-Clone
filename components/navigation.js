import React from "react";

import NavButton from "./nav-button";
import TextTitle from "./text-title";
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
        <TextTitle>Home</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "explore"}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavButton>

      <NavButton notify={15} selected={selectedKey === "notifications"}>
        <Notifications />
        <TextTitle>Notifications</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "messages"}>
        <Messages />
        <TextTitle>Messages</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "bookmarks"}>
        <Bookmarks />
        <TextTitle>Bookmarks</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "lists"}>
        <Lists />
        <TextTitle>Lists</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "profile"}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "more"}>
        <More />
        <TextTitle>More</TextTitle>
      </NavButton>
    </nav>
  );
};

export default Navigation;
