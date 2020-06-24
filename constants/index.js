import React from "react";
import * as Icon from "../components/icons";

export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270,
};

 export const MENU = [
  {
    key: "twitter",
    path: "/home",
    icon: <Icon.Twitter style={{ 
      "font-size": "30px"}}/>,
    iconSelected: <Icon.Twitter style={{ 
      "font-size": "30px"}}/>,
    title: "",
  },
  {
    key: "home",
    path: "/home",
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: "Home",
  },
  {
    key: "explore",
    path: "/explore",
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExploreFill />,
    title: "Explore",
  },
  {
    key: "notifications",
    path: "/notifications",
    icon: <Icon.Notifications />,
    iconSelected: <Icon.NotificationsFill />,
    title: "Notifications",
    notify: 17,
  },
  {
    key: "messages",
    path: "/messages",
    icon: <Icon.Messages />,
    iconSelected: <Icon.MessagesFill />,
    title: "Messages",
  },
  {
    key: "bookmarks",
    path: "/bookmarks",
    icon: <Icon.Bookmarks />,
    iconSelected: <Icon.BookmarksFill />,
    title: "Bookmarks",
  },
  {
    key: "lists",
    path: "/lists",
    icon: <Icon.Lists />,
    iconSelected: <Icon.ListsFill />,
    title: "Lists",
  },
  {
    key: "profile",
    path: "/profile",
    icon: <Icon.Profile />,
    iconSelected: <Icon.ProfileFill />,
    title: "Profile",
  },
  {
    key: "more",
    path: "/more",
    icon: <Icon.More />,
    iconSelected: <Icon.More />,
    title: "More",
  },
];
