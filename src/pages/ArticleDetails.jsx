import useSWR from "swr";
import { Suspense } from "react";
import ArticleContainer from "../components/ArticleContainer/ArticleContainer";
import fetcher from "../utils/fetcher";

export default function ArticleDetails() {
  const id = window.location.pathname.split("/").filter(Boolean).pop();

  const { data, isLoading, error } = useSWR(
    `https://dummyjson.com/posts/${id}`,
    fetcher,
    {
      suspense: true,
    }
  );

  if (error) return <div>Erreur : {error.message}</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArticleContainer article={data} />
    </Suspense>
  );
}
