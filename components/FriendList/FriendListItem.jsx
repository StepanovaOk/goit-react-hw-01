import clsx from "clsx";
import React from "react";
import friends from "./friends.json";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friendListItem}>
    <img className={styles.img} src={avatar} alt="Avatar" width="48" />
    <p className={styles.name}>{name}</p>
    <p
      className={clsx(styles.status, {
        [styles.online]: isOnline,
        [styles.offline]: !isOnline,
      })}
    >
      {isOnline ? "Online" : "Offline"}
    </p>
  </div>
);

export default FriendListItem;
