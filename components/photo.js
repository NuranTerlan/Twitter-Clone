import React from "react";
import cn from "classnames";

import styles from "./photo.module.css";

const Photo = ({
  src = "https://pbs.twimg.com/profile_images/1139018522414108672/eYrh3Y7S_400x400.jpg",
  alt, small
}) => {
  return (
    <div className={cn([styles.photo, small && styles.small])}>
      <img className={cn(styles.img)} src={src} alt={alt} />
    </div>
  );
};

export default Photo;
