import "./ArticleCard.css";

export default function ArticleCard({ data }) {
  const { id, title, body, reactions } = data;
  return (
    <a href={`/article/${id}`}>
      <h2>{title}</h2>
      <p>{body}</p>
      <div>
        <span>Likes : {reactions.likes}</span>
        <span>Dislikes : {reactions.dislikes}</span>
      </div>
    </a>
  );
}
