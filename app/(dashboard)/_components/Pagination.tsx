"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

type TPaginationProps = {
  page: string;
  size: string;
  totalUserCount: number;
  onPageChange: (newPage: string) => void;
};

function Pagination({
  totalUserCount,
  page,
  size,
  onPageChange,
}: TPaginationProps) {
  const currentPage = Number(page);
  const currentSize = Number(size);
  const pageSize = Number(size);
  const totalPages = Math.ceil(totalUserCount / pageSize);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div
      className="flex items-center justify-center   
 pt-4 gap-x-4"
    >
      <button
        onClick={handlePrevPage}
        className={`${currentPage === 1 ? "opacity-50" : "text-secondary"}`}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
        className={currentPage === totalPages ? "opacity-50" : "text-secondary"}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
