import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FunAxios() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${url}/1`);
        setPost(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
        setPost(err);
      }
    };
    getData();
  }, []);
  const createPost = () => {
    axios
      .post(`${url}`, {
        title: "Hello World",
        body: "this is a new post",
      })
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updatePost = () => {
    axios
      .put(`${url}/1`, {
        age: "10",
        name: "john",
      })
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletePost = () => {
    axios
      .delete(`${url}/1`)
      .then(() => {
        setPost("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}> Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
      {post !== null ? <p>{post.body}</p> : ""}
      {post !== null ? <p>{post.title}</p> : ""}
      {post !== null ? <p>{post.age}</p> : ""}
      {post !== null ? <p>{post.name}</p> : ""}
    </div>
  );
}

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function FunAxios() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function deletePost() {
//     axios.delete(`${baseURL}/1`).then(() => {
//       alert("Post deleted!");
//       setPost(null);
//     });
//   }

//   if (!post) return "No post!";

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }
