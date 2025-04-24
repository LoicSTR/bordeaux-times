import useSWR from "swr";
import { Suspense } from "react";
import fetcher from "../../utils/fetcher";

export default function ArticleContainer({ article }) {
  const { id, title, body, reactions, userId } = article;

  const {
    data: commentsData,
    isLoading: isLoadingComments,
    error: errorComments,
  } = useSWR(`https://dummyjson.com/comments/post/${id}`, fetcher, {
    suspense: true,
  });
  const {
    data: user,
    isLoading: isLoadingUser,
    error: errorUser,
  } = useSWR(`https://dummyjson.com/users/${userId}`, fetcher, {
    suspense: true,
  });

  const comments = commentsData.comments;

  return (
    <>
      <h1>{title}</h1>
      <p>
        by {user.firstName} {user.lastName}
      </p>
      <p>{body}</p>
      <div>
        <span>Likes : {reactions.likes}</span>
        <span>Dislikes : {reactions.dislikes}</span>
      </div>
      {isLoadingComments && <div>Loading...</div>}
      {!isLoadingComments && comments && comments.length === 0 && (
        <div>No comments</div>
      )}
      {!isLoadingComments && comments && comments.length > 0 && (
        <>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={comment.user.id === userId ? "comment-user" : ""}
            >
              <p>{comment.body}</p>
              <p>by {comment.user.fullName}</p>
              <div>
                <span>Likes : {comment.likes}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
