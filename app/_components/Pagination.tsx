"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type TPaginationProps = {
  page: string;
  size: string;
  totalCount: number;
  onPageChange: (newPage: number) => void;
};

function Pagination({
  totalCount,
  page,
  size,
  onPageChange,
}: TPaginationProps) {
  const currentPage = Number(page);
  const currentSize = Number(size);
  const pageSize = Number(size);
  const totalPages = Math.ceil(totalCount / pageSize);

  const [inputSize, setInputSize] = useState(pageSize);

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

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = Number(e.target.value);
    if (newSize > 0) {
      setInputSize(newSize);
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
      {/* <input
        type="number"
        value={inputSize}
        onChange={handleSizeChange}
        className="border rounded p-2"
      /> */}
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
