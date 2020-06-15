import React from "react";
import cn from "classnames";

import Button from "./button";

import styles from "./theme-button.module.css";

const ThemeButton = ({ className, children, tall = false, ...props }) => {
  return (
    <Button
      className={cn([styles.themeButton, tall && styles.tall], className)}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ThemeButton;
