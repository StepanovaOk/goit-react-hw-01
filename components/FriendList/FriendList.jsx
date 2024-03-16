import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map((friend) => (
      <li className={styles.item} key={friend.id}>
        <FriendListItem {...friend} />
      </li>
    ))}
  </ul>
);
export default FriendList;
