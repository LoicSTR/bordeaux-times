import useSWR from "swr";
import { Suspense } from "react";
import fetcher from "../../utils/fetcher";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function SearchResults({ query }) {
  const { data, isLoading, error } = useSWR(
    `https://dummyjson.com/posts/search?q=${query}`,
    fetcher,
    {
      suspense: true,
    }
  );

  if (error) return <div>Erreur : {error.message}</div>;

  const posts = data.posts;

  return (
    <div className="search-results">
      <Suspense fallback={<div>Loading...</div>}>
        {posts.map((post) => (
          <div key={post.id}>
            <ArticleCard data={post} />
          </div>
        ))}
      </Suspense>
    </div>
  );
}
