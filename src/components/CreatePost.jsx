import React, { useState } from "react";
import styles from "./CreatePost.module.css";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.headtitle}>記事を投稿する</h1>
        <div className={styles.inputPost}>
          <h2>タイトル</h2>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.inputPost}>
          <h2>投稿</h2>
          <textarea
            placeholder="投稿内容を記入"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className={styles.postBtn}>投稿する</button>
      </div>
    </div>
  );
};

export default CreatePost;
