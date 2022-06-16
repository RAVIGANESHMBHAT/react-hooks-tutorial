import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFetching() {
    const [post, setPost] = useState([]);
    //const [posts, setPosts] = useState([]);
  const [id, setId] = useState("1");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
          setPost(response.data);
          //setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div key={post.id}>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
