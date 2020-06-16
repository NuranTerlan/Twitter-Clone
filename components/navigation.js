import React from "react";

import NavButton from "./nav-button";
import TextTitle from "./text-title";
import {
  Twitter,
  Home,
  Explore,
  Notifications,
  Messages,
  Bookmarks,
  Lists,
  Profile,
  More,
  HomeFill,
  ExploreFill,
  NotificationsFill,
  MessagesFill,
  BookmarksFill,
  ListsFill,
  ProfileFill,
} from "./icons";

const MENU = [
  {
    key: "twitter",
    icon: <Twitter />,
    title: "",
  },
  {
    key: "home",
    icon: <Home />,
    iconSelected: <HomeFill />,
    title: "Home",
  },
  {
    key: "explore",
    icon: <Explore />,
    iconSelected: <ExploreFill />,
    title: "Explore",
  },
  {
    key: "notifications",
    icon: <Notifications />,
    iconSelected: <NotificationsFill />,
    title: "Notifications",
    notify: 17,
  },
  {
    key: "messages",
    icon: <Messages />,
    iconSelected: <MessagesFill />,
    title: "Messages",
  },
  {
    key: "bookmarks",
    icon: <Bookmarks />,
    iconSelected: <BookmarksFill />,
    title: "Bookmarks",
  },
  {
    key: "lists",
    icon: <Lists />,
    iconSelected: <ListsFill />,
    title: "Lists",
  },
  {
    key: "profile",
    icon: <Profile />,
    iconSelected: <ProfileFill />,
    title: "Profile",
  },
  {
    key: "more",
    icon: <More />,
    title: "More",
  },
];

import styles from "./navigation.module.css";

const Navigation = ({ flat = false, selectedKey }) => {
  return (
    <nav className={styles.nav}>
      {MENU.map((menuItem) => {
        const showFullNav = !flat && menuItem.title.length > 0;
        const selected = selectedKey === menuItem.key;

        return (
            <NavButton
            key={menuItem.key}
            notify={menuItem.notify}
            selected={selected}
          >
            {selected ? menuItem.iconSelected : menuItem.icon}
            {showFullNav && <TextTitle>{menuItem.title}</TextTitle>}
          </NavButton>
        );
      })}
    </nav>
  );
};

export default Navigation;
