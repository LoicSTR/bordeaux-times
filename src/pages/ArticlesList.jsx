import useSWR from "swr";
import { Suspense } from "react";
import fetcher from "../utils/fetcher";
import { useState } from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import Pagination from "../components/Pagination/Pagination";

export default function ArticlesList() {
  const [skip, setSkip] = useState(0);
  const { data, isLoading, error } = useSWR(
    `https://dummyjson.com/posts?limit=20&skip=${skip}`,
    fetcher,
    {
      suspense: true,
    }
  );
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {data.posts.map((post) => (
        <div key={post.id}>
          <ArticleCard data={post} />
        </div>
      ))}
      <Pagination nbArticles={data.total} setSkip={setSkip} />
    </Suspense>
  );
}
