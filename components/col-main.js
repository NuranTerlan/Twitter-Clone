import React from "react";
import cn from "classnames";

import styles from "./col-main.module.css";

const Main = ({ children }) => {
  return <div className={cn(styles.main)}>{children}</div>;
};

export default Main;
