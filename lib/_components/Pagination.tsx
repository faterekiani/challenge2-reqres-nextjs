"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useUsers } from "../hook/useUser";

type PaginationProps = {
	page: number;
	size: number;
	onPageChange: (newPage: number, newSize: number) => void;
};

function Pagination({ page, size, onPageChange }: PaginationProps) {
	const { userData } = useUsers({ pageNumber: page, pageSize: size });

	const totalUserCount = userData?.total;

	const currentPage = Number(page);
	const pageSize = Number(size);
	const totalPages = totalUserCount ? Math.ceil(totalUserCount / pageSize) : 1;

	const handlePrevPage = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1, pageSize);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1, pageSize);
		}
	};

	const handleSizeChange = (newSize: number) => {
		onPageChange(1, newSize); // Reset to page 1 when changing size
	};

	return (
		<div className="flex items-center justify-between py-4">
			<div className="flex items-center gap-x-2 text-sm">
				<label htmlFor="sizeSelect" className="text-gray-500">
					Items per page:
				</label>
				<select
					id="sizeSelect"
					value={size}
					className="rounded-md w-12 h-6 text-center shadow-sm"
					onChange={(e) => handleSizeChange(Number(e.target.value))}
				>
					<option value="3">3</option>
					<option value="6">6</option>
					<option value="12">12</option>
				</select>
			</div>

			<div className="flex items-center gap-4">
				<button
					onClick={handlePrevPage}
					className={`${currentPage === 1 ? "opacity-50" : "text-secondary"}`}
					disabled={currentPage === 1}
				>
					<ChevronLeft />
				</button>
				<div className="flex items-center gap-x-4 text-sm">
					<span className="text-gray-500">
						Page {currentPage} of {totalPages}
					</span>
					<ul className="flex items-center gap-x-4">
						{Array.from({ length: totalPages }, (_, index) => index + 1).map(
							(page) => (
								<li
									key={page}
									className={`cursor-pointer ${
										currentPage === page
											? "flex items-center justify-center bg-primary-950 size-6 text-white rounded-md shadow-sm"
											: ""
									}`}
									onClick={() => onPageChange(page, size)}
								>
									{page}
								</li>
							),
						)}
					</ul>
				</div>
				<button
					disabled={currentPage === totalPages}
					onClick={handleNextPage}
					className={
						currentPage === totalPages ? "opacity-50" : "text-secondary"
					}
				>
					<ChevronRight />
				</button>
			</div>
		</div>
	);
}

export default Pagination;
