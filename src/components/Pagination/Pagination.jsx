import "./Pagination.css";

export default function Pagination({ nbArticles, setSkip, skip }) {
  const nbPages = Math.ceil(nbArticles / 20);
  let pageNumbers = [];
  for (let i = 1; i <= nbPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber, index) => (
        <button
          onClick={() => setSkip(index * 20)}
          key={index}
          className={skip === index * 20 ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
