import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.postContents}>
        <div className={styles.postHeader}>
          <h1>タイトル</h1>
        </div>
        <div className={styles.postTextContainer}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </div>
        <div className={styles.postName}>
          <h3>@sasasa</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
