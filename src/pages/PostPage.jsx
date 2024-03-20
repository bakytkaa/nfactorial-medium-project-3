import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaBookmark,
  FaComment,
  FaFacebook,
  FaHeart,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export function PostPage() {
  const { postID } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/data/posts/${postID}.json`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="post">
      {post && (
        <>
          <div className="post-header">
            <div className="post-header-info">
              <img className="avatar" src="/images/avatar.png" alt="avatar" />

              <div className="post-info-details">
                <div className="author">{post.author}</div>
                <div className="other">
                  <span>
                    {moment(post.date, "YYYY-MM-DD").format("DD MMM")}
                  </span>
                  <span> · </span>
                  <span>{post.readTime} min read</span>
                  <span> · </span>
                  <span>Member-only</span>
                </div>
              </div>
            </div>

            <div className="socials">
              <FaLinkedin size="1.125rem" />
              <FaFacebook size="1.125rem" />
              <FaTwitter size="1.125rem" />
            </div>
          </div>

          <div className="post-content">
            <div className="description">
              <h1 className="title">{post.title}</h1>
              <p>{post.content.substring(0, 150)}</p>
            </div>

            <img src={post.image_url} alt={post.title} />

            <p className="text">{post.content}</p>

            <div className="details">
              <div className="statistics">
                <div className="item">
                  <FaHeart size="1.125rem" />
                  <span>{post.likes}</span>
                </div>

                <div className="item">
                  <FaComment size="1.125rem" />
                  <span>{post.comments}</span>
                </div>
              </div>

              <FaBookmark size="1.125rem" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
