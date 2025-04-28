export default function SearchForm({ onSubmit }) {
  const submit = (e) => {
    e.preventDefault();
    onSubmit({ query: e.target.searchInput.value });
    e.target.reset();
  };
  return (
    <div className="search-bar-container">
      <form onSubmit={submit} className="search-bar">
        <input
          type="text"
          name="searchInput"
          placeholder="Search articles..."
          required
        />
        <button type="submit" aria-label="Search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}
