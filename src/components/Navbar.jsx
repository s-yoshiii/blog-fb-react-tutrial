import React from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEdit,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();
  const logout = async () => {
    signOut(auth).then((result) => {
      localStorage.setItem("isAuth", false);
      setIsAuth(false);
      navigate("/logout");
    });
  };
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
          <Link className={styles.link} onClick={() => logout()}>
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
