import { Link } from "react-router";

export default function ArticleCard({ data }) {
  const { id, title, body, reactions, views } = data;

  return (
    <Link to={`/article/${id}`}>
      <article className="article-card">
        <div className="top">
          <h2>{title}</h2>
        </div>
        <div className="middle">
          <p>{body}</p>
        </div>
        <div className="bottom">
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
      </article>
    </Link>
  );
}
