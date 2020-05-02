import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Post.css";

const Post = (props) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://biohackers.me/wp-json/wp/v2/posts/${props.match.params.id}`
      );
      setPost(result.data);
    };

    fetchData();
  }, [props.match.params.id]);
  return (
    <div className="singleContent">
      <div className="singleTitle">{post && post.title.rendered}</div>
      <img
        src={post && post.acf.thumbnail}
        alt="image"
        className="singleImage"
      />
      {post && (
        <div
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          className="wordpressContent"
        ></div>
      )}
    </div>
  );
};

export default Post;
