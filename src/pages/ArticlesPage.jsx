import useSWR from "swr";
import { Suspense } from "react";
import fetchData from "../utils/fetchData";
import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import ArticlesList from "../components/ArticlesList/ArticlesList";

export default function ArticlesPage() {
  const [skip, setSkip] = useState(0);

  const { data, error } = useSWR(
    ["/posts", skip],
    async ([path, skip]) => {
      return fetchData(`https://dummyjson.com${path}?limit=21&skip=${skip}`);
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
        <Suspense fallback={<div className="center">Loading...</div>}>
          <ArticlesList posts={posts} />
          <Pagination nbArticles={total} setSkip={setSkip} skip={skip} />
        </Suspense>
      )}
    </>
  );
}
