import clsx from "clsx";
import PropTypes from "prop-types";
import friends from "../FriendList/friends.json";
import styles from "../FriendList/FriendList.module.css";

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

friends.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.string,
};

export default FriendListItem;
