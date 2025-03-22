import React from "react";
import { Button } from "./button";
import { IPaginationProps } from "@/types";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: IPaginationProps) {
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center justify-between">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="ghost"
          className="bg-transparent p-0"
        >
          Previous
        </Button>
        <div className="flex items-center gap-1">
          {pageNumbers.map((pageNumber, index) => (
            <React.Fragment key={index}>
              {pageNumber === null ? (
                <span className="px-2 py-1 text-[#707476]">...</span>
              ) : (
                <Button
                  onClick={() => onPageChange(pageNumber as number)}
                  className={`${
                    currentPage === pageNumber
                      ? "text-white font-gilroy-regular"
                      : "text-[#707476] bg-white"
                  } h-4 w-4 rounded-md`}
                  variant={currentPage === pageNumber ? "ghost" : "default"}
                  size="xl"
                >
                  {pageNumber}
                </Button>
              )}
            </React.Fragment>
          ))}
        </div>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-transparent p-0"
          variant="ghost"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

function getPageNumbers(
  currentPage: number,
  totalPages: number
): (number | null)[] {
  const maxVisiblePages = 5;
  const pageNumbers: (number | null)[] = [];

  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  pageNumbers.push(1);

  if (currentPage <= 3) {
    pageNumbers.push(2, 3, 4, null, totalPages);
  } else if (currentPage >= totalPages - 2) {
    pageNumbers.push(
      null,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages
    );
  } else {
    pageNumbers.push(
      null,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      null,
      totalPages
    );
  }

  return pageNumbers;
}
