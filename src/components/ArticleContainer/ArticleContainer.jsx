import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { useUser } from "../../contexts/UserContext";
import "./ArticleContainer.css";
import { Suspense } from "react";
import { NavLink } from "react-router";

export default function ArticleContainer({ article }) {
  const { id, title, body, reactions, userId, tags, views } = article;

  const userConnected = useUser();

  const { data: commentsData, error: errorComments } = useSWR(
    `https://dummyjson.com/comments/post/${id}`,
    fetcher,
    {
      suspense: true,
    }
  );
  const { data: author, error: errorAuthor } = useSWR(
    `https://dummyjson.com/users/${userId}`,
    fetcher,
    {
      suspense: true,
    }
  );

  const comments = commentsData.comments;

  return (
    <>
      <NavLink to="/articles">
        <button className="back">
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
      </NavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="title-container">
          <div className="tags">
            {tags.map((tag, index) => (
              <p key={index}>{tag.toUpperCase()}</p>
            ))}
          </div>
          <h1 className="title-article">{title}</h1>
          <em>
            by {author.firstName} {author.lastName}
          </em>
        </div>
        <p>{body}</p>
        <div className="stats">
          <div>
            <i className="fa-regular fa-eye"></i>
            {views}
          </div>
          <div>
            <i className="fa-regular fa-thumbs-up"></i> {reactions.likes}
          </div>
          <div>
            <i className="fa-regular fa-thumbs-down"></i> {reactions.dislikes}
          </div>
        </div>
        {comments && comments.length === 0 && <div>No comments</div>}
        {comments && comments.length > 0 && (
          <div className="comments-container">
            <h2>Comments</h2>
            <div className="comments">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className={
                    comment.user.id === userConnected.user.id
                      ? "comment comment-user"
                      : "comment"
                  }
                >
                  <p>{comment.body}</p>
                  <div className="comment-infos">
                    <em>by {comment.user.fullName}</em>
                    <div className="comment-likes">
                      <i className="fa-regular fa-thumbs-up"></i>
                      {comment.likes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Suspense>
    </>
  );
}
