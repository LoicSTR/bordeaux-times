import { useState } from "react";
import useSWR from "swr";
import fetchData from "../../utils/fetchData";
import Pagination from "../Pagination/Pagination";
import ArticlesList from "../ArticlesList/ArticlesList";

export default function SearchResults({ query }) {
  const [skip, setSkip] = useState(0);

  const { data, error } = useSWR(
    ["/posts", query, skip],
    async ([path, query, skip]) => {
      return fetchData(
        `https://dummyjson.com${path}/search?q=${query}&limit=21&skip=${skip}`
      );
    },
    {
      suspense: true,
    }
  );

  const { posts, total } = data;

  return (
    <>
      {error ? (
        <p style={{ color: "red" }} className="center">
          Error loading articles.
        </p>
      ) : (
        <>
          {query && (!posts || posts.length === 0) && (
            <p className="center">No results</p>
          )}
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
      )}
    </>
  );
}
