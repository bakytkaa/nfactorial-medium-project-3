import { useEffect, useState } from "react";
import { PostList } from "../components/PostList.jsx";

export function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="main">
      <section className="banner">
        <span className="text">Hello, World!</span>
      </section>

      <PostList posts={posts} />
    </div>
  );
}
