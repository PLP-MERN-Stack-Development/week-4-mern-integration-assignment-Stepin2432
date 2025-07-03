export default function Pagination({ page, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      {pages.map(p => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          style={{ fontWeight: p === page ? 'bold' : 'normal' }}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
