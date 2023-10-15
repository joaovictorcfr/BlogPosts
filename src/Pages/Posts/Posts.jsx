import { Nav } from "../../Components/Layout/Nav/Nav";
import styles from "./Posts.module.css";
import blogFetch from "../../Axios/Config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Posts() {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const creatPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.post("/posts", {
      body: post,
    });

    navigate("/");
  };

  return (
    <div className={styles.container_post}>
      <Nav />
      <h1>Inserir novo Post:</h1>
      <form className={styles.formin} onSubmit={(e) => creatPost(e)}>
        <div className={styles.form_control}>
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o titulo"
          />
          <label htmlFor="body">Conteudo:</label>
          <textarea
            name="body"
            placeholder="Digite o conteudo"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <input type="submit" value="criar Post" className={styles.btn} />
        </div>
      </form>
    </div>
  );
}
