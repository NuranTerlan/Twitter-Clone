import React from "react";
import cn from "classnames";

import styles from "./text-body.module.css";

const TextBody = ({ bold = false, className, children, ...props }) => {
  return (
    <span
      className={cn([styles.textBody, bold && styles.bold, className])}
      {...props}
    >
      {children}
    </span>
  );
};

export default TextBody;
