import styles from "../PostsId/PostsId.module.css"
import blogFetch from "../../Axios/Config"
import { useState, useEffect } from "react";
import Nav from "../../Components/Layout/Nav/Nav"

import { useParams } from "react-router-dom";

export function PostsId() {

  const [post, setPost] = useState({});
  const {id} = useParams();

  getPost = async () => {
    try {
      console.log(id)
      const response = await blogFetch.get(`/post/${id}`)
      const data = response.data;
      setPost(data);

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPost();
  }, [])

  return (
    <div className={styles.container_postsid}>
      <Nav/>
      {!post.title ? (
        <p>Carregando...</p>
      ): (
        <div className={styles.posts}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}
