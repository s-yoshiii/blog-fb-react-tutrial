import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const Home = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <div className={styles.page}>
      {postList.map((post) => {
        return (
          <div className={styles.postContents}>
            <div className={styles.postHeader}>
              <h1>{post.title}</h1>
            </div>
            <div className={styles.postTextContainer}>{post.postText}</div>
            <div className={styles.postName}>
              <h3>@ {post.author.username}</h3>
              <button>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
