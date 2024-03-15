import PropTypes from "prop-types";
import styles from "./profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={styles.card}>
    <div className={styles.description}>
      <img className={styles.img} src={image} alt="User avatar" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.text}>Followers</span>
        <span className={styles.number}>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}>Views</span>
        <span className={styles.number}>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}>Likes</span>
        <span className={styles.number}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
