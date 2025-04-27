import { useState } from "react";
import { Suspense } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import "./SearchContainer.css";

export default function SearchContainer() {
  const [query, setQuery] = useState("");

  const searchNews = (data) => {
    setQuery(data.query);
  };

  return (
    <>
      <SearchForm onSubmit={searchNews} />
      {!query && <p className="center">Waiting for a search...</p>}
      {query && (
        <Suspense fallback={<div className="center">Loading...</div>}>
          <SearchResults query={query} />
        </Suspense>
      )}
    </>
  );
}
