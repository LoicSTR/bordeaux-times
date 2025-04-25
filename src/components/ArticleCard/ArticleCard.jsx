import "./ArticleCard.css";

export default function ArticleCard({ data }) {
  const { id, title, body, reactions } = data;
  return (
    <a href={`/article/${id}`}>
      <article className="article-card">
        <div className="overlay">+</div>
        <div className="top">
          <h2>{title}</h2>
        </div>
        <p>{body}</p>
        <div className="bottom">
          <div>
            <i class="fa-regular fa-thumbs-up"></i> {reactions.likes}
          </div>
          <div>
            <i class="fa-regular fa-thumbs-down"></i> {reactions.dislikes}
          </div>
        </div>
      </article>
    </a>
  );
}
