import moment from "moment";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function PostList({ posts }) {
  return (
    <div className="post-list">
      {/* eslint-disable-next-line react/prop-types */}
      {posts && posts.length ? (
        // eslint-disable-next-line react/prop-types
        posts.map((post) => (
          <div className="post-item" key={post.id}>
            <div className="post-info">
              <div className="details">
                <img className="avatar" src="/images/avatar.png" alt="avatar" />

                <span>
                  <span className="author">{post.author}</span>
                  <span> · </span>
                  <span className="date">
                    {moment(post.date, "YYYY-MM-DD").format("DD MMM")}
                  </span>
                </span>
              </div>

              <div className="info">
                <Link className="link" to={`/posts/${post.id}`}>
                  <h2 className="title">{post.title}</h2>
                </Link>

                <p>{post.content.substring(0, 150)}...</p>
              </div>

              <div className="post-info-footer">
                <div className="tags">
                  <span className="tag-text">{post.tag}</span>
                  <span>{post.readTime} min read</span>
                  <span> · </span>
                  <span>Selected for you</span>
                </div>

                <div className="icons">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <img className="post-image" src={post.image_url} alt={post.title} />
          </div>
        ))
      ) : (
        <p>No posts!</p>
      )}
    </div>
  );
}
