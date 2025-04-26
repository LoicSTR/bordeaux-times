import "./ArticlesList.css";
import ArticleCard from "./ArticleCard";

export default function ArticlesList(posts) {
  return (
    <div className="articles-list">
      {posts.posts.map((post) => (
        <div key={post.id}>
          <ArticleCard data={post} />
        </div>
      ))}
    </div>
  );
}
