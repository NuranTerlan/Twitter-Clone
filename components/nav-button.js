import React from "react";
import cn from "classnames";

import Button from "./button";

import styles from "./nav-button.module.css";

const NavButton = ({ notify, selected, children, className, ...props }) => {
  return (
    <Button
      className={cn([styles.navButton, selected && styles.navButtonSelected, className])}
      {...props}
    >
      {notify && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  );
};

export default NavButton;
