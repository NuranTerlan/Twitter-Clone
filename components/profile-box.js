import React from "react";
import cn from "classnames";

import styles from "./profile-box.module.css";

import Photo from "./photo";
import { ArrowBottom } from "./icons";
import Button from "./button";
import TextBody from "./text-body";

const ProfileBox = ({
  flat = false,
  name = "1devvhale3",
  slug = "nuranterlan",
}) => {
  return (
    <Button className={cn([styles.profileBox])}>
      <Photo small/>
      {!flat && (
        <React.Fragment>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slugBelow}>@{slug}</TextBody>
          </div>
          <ArrowBottom className={styles.icon} />
        </React.Fragment>
      )}
    </Button>
  );
};

export default ProfileBox;
