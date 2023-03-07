import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/createpost">
        記事投稿
      </Link>
      <Link className={styles.link} to="/login">
        ログイン
      </Link>
    </nav>
  );
};

export default Navbar;
