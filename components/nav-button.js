import React from "react";
import cn from "classnames";

import Button from "./button";

import styles from "./nav-button.module.css";

const NavButton = ({ notify, selected, children, ...props }) => {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  );
};

export default NavButton;
