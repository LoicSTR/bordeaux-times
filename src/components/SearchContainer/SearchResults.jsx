import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import Pagination from "../Pagination/Pagination";
import ArticlesList from "../ArticlesList/ArticlesList";

export default function SearchResults({ query }) {
  const [skip, setSkip] = useState(0);
  const { data } = useSWR(
    `https://dummyjson.com/posts/search?q=${query}&limit=21&skip=${skip}`,
    fetcher,
    {
      suspense: true,
    }
  );

  const { posts, total } = data;

  return (
    <>
      {!query && <p>Waiting for a search...</p>}
      {query && (!posts || posts.length === 0) && <p>No results</p>}
      {query && posts && posts.length > 0 && (
        <>
          <ArticlesList posts={posts} />
          {total > 21 && (
            <Pagination
              nbArticles={posts.length}
              setSkip={setSkip}
              skip={skip}
            />
          )}
        </>
      )}
    </>
  );
}
