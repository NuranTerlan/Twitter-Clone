import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames"

import styles from "./navigation.module.css";

import { MENU } from "../constants";
import NavButton from "./nav-button";
import TextTitle from "./text-title";


const Navigation = ({ flat = false }) => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      {MENU.map((menuItem) => {
        const showFullNav = !flat && menuItem.title.length > 0;
        const selected = router.pathname === menuItem.path;

        return (
          <Link key={menuItem.key} href={`${menuItem.path}`}>
            <NavButton
              className={cn([styles.navButton, menuItem.key])}
              notify={menuItem.notify}
              selected={selected}
            >
              {selected ? menuItem.iconSelected : menuItem.icon}
              {showFullNav && <TextTitle>{menuItem.title}</TextTitle>}
            </NavButton>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
