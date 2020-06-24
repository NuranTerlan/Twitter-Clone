import React, { useContext, useState } from "react";
import cn from "classnames";

import styles from "./theme-options.module.css";

import StoreContext from "../store";

const THEME = {
  light: "Light",
  dim: "Dim",
  dark: "Dark",
}

const ThemeOptions = () => {
  const store = useContext(StoreContext);

  return (
    <div className={styles.container}>
      {["light", "dim", "dark"].map((theme) => (
        <label key={theme} className={styles.label}>
          <input 
            type="radio" 
            value={theme} 
            name="theme" 
            checked={theme === store.theme} 
            onChange={e => store.changeTheme(e.target.value)}
          />
          {THEME[theme]}
          <div className={cn(theme, styles.colorBox)}></div>
        </label>
      ))}
    </div>
  );
};

export default ThemeOptions;
