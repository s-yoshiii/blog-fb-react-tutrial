import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase";
const Home = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };
  return (
    <div className={styles.page}>
      {postList.map((post) => {
        return (
          <div className={styles.postContents} key={post.id}>
            <div className={styles.postHeader}>
              <h1>{post.title}</h1>
            </div>
            <div className={styles.postTextContainer}>{post.postText}</div>
            <div className={styles.postName}>
              <h3>@ {post.author.username}</h3>
              <button onClick={() => handleDelete(post.id)}>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
