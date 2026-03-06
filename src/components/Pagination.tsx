import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/**
 * Builds a page-window array like: [1, '...', 4,5,6, '...', 20]
 * Always shows first, last, current ±2, and ellipsis gaps.
 */
function buildPages(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | '...')[] = [];
  const addPage = (n: number) => {
    if (!pages.includes(n)) pages.push(n);
  };

  // Always show first page
  addPage(1);

  // Left ellipsis
  if (current > 4) pages.push('...');

  // Window around current: current-2 … current+2
  for (let i = Math.max(2, current - 2); i <= Math.min(total - 1, current + 2); i++) {
    addPage(i);
  }

  // Right ellipsis
  if (current < total - 3) pages.push('...');

  // Always show last page
  addPage(total);

  return pages;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  if (totalPages <= 1) return null;

  const pages = buildPages(currentPage, totalPages);

  const btnBase =
    'inline-flex items-center justify-center h-9 min-w-[2.25rem] px-2 rounded-lg text-sm font-medium border transition-colors duration-150 select-none';
  const btnActive = 'bg-blue-600 border-blue-600 text-white shadow-sm';
  const btnDefault = 'bg-white border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700';
  const btnDisabled = 'bg-white border-gray-200 text-gray-300 cursor-not-allowed';

  return (
    <div className={`flex flex-col items-center gap-3 ${className || ''}`}>
      {/* Info text */}
      <p className="text-sm text-gray-500">
        Halaman <span className="font-semibold text-gray-700">{currentPage}</span> dari{' '}
        <span className="font-semibold text-gray-700">{totalPages}</span>
      </p>

      {/* Page buttons */}
      <div className="flex items-center gap-1 flex-wrap justify-center">
        {/* Prev */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Halaman sebelumnya"
          className={`${btnBase} gap-1 px-3 ${currentPage === 1 ? btnDisabled : btnDefault}`}
        >
          <FaChevronLeft className="w-3 h-3" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Page numbers */}
        {pages.map((page, idx) =>
          page === '...' ? (
            <span
              key={`ellipsis-${idx}`}
              className="inline-flex items-center justify-center h-9 w-8 text-gray-400 text-sm select-none"
            >
              …
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              aria-current={currentPage === page ? 'page' : undefined}
              className={`${btnBase} ${currentPage === page ? btnActive : btnDefault}`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Halaman berikutnya"
          className={`${btnBase} gap-1 px-3 ${currentPage === totalPages ? btnDisabled : btnDefault}`}
        >
          <span className="hidden sm:inline">Next</span>
          <FaChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
