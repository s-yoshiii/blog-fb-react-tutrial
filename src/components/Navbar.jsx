import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEdit,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        <FontAwesomeIcon className={styles.icon} icon={faHome} /> Home
      </Link>
      {!isAuth ? (
        <Link className={styles.link} to="/login">
          <FontAwesomeIcon
            className={styles.icon}
            icon={faArrowRightToBracket}
          />
          ログイン
        </Link>
      ) : (
        <>
          <Link className={styles.link} to="/createpost">
            <FontAwesomeIcon className={styles.icon} icon={faEdit} /> 記事投稿
          </Link>
          <Link className={styles.link} to="/logout">
            <FontAwesomeIcon
              className={styles.icon}
              icon={faArrowRightToBracket}
            />
            ログアウト
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
