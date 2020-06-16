import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Button from "../components/button";
import NavButton from "../components/nav-button";
import Navigation from "../components/navigation";
import { Home } from "../components/icons";
import TextTitle from "./../components/text-title";
import ThemeButton from "./../components/theme-button";
import Stack from "./../components/stack";

export default {
  title: "Buttons",
  decorators: [withKnobs],
};

export const Normal = () => <Button>Save</Button>;

export const Theme = () => (
  <Stack column gap={20}>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton full>Tweet Full</ThemeButton>
    <ThemeButton full tall>
      Tweet Tall
    </ThemeButton>
  </Stack>
);

export const Nav = () => (
  <NavButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavButton>
);

export const Navbar = () => {
  const flat = boolean("Flat", false);
  return <Navigation flat={flat} selectedKey="home" />;
};
