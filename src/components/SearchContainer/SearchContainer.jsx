import { useState } from "react";
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
      <SearchResults query={query} />
    </>
  );
}
