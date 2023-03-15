import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const Home = () => {
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
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
