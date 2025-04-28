import useSWR from "swr";
import { Suspense } from "react";
import ArticleContainer from "../components/ArticleContainer/ArticleContainer";
import fetchData from "../utils/fetchData";

export default function ArticleDetails() {
  const id = window.location.pathname.split("/").filter(Boolean).pop();

  const { data, error } = useSWR(
    ["/posts", id],
    async ([path, id]) => {
      return fetchData(`https://dummyjson.com${path}/${id}`);
    },
    {
      suspense: true,
    }
  );

  return (
    <>
      {error ? (
        <p style={{ color: "red" }} className="center">
          Error loading article.
        </p>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleContainer article={data} />
        </Suspense>
      )}
    </>
  );
}
