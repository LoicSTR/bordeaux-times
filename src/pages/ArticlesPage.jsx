import useSWR from "swr";
import { Suspense } from "react";
import fetcher from "../utils/fetcher";
import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import ArticlesList from "../components/ArticlesList/ArticlesList";

export default function ArticlesPage() {
  const [skip, setSkip] = useState(0);
  const { data } = useSWR(
    `https://dummyjson.com/posts?limit=21&skip=${skip}`,
    fetcher,
    {
      suspense: true,
    }
  );

  const { posts, total } = data;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArticlesList posts={posts} />
      <Pagination nbArticles={total} setSkip={setSkip} skip={skip} />
    </Suspense>
  );
}
