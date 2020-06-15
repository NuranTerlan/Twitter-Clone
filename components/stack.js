import React from "react";
import cn from "classnames";

import styles from "./stack.module.css";

const Stack = ({ gap = 10, column = false, children }) => {
  return (
    <div
      style={{ "--gap": `${gap}px` }}
      className={cn([styles.stack, column && styles.column])}
    >
      {children}
    </div>
  );
};

export default Stack;
