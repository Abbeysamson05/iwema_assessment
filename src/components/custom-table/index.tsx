"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { DataItem, ITableProps } from "@/types";
import { ReactNode } from "react";
import { Pagination } from "../ui/pagination";
import { SelectFilter } from "../filter/select";
import { Checkbox } from "../ui/checkbox";

type CellRenderer<T> = (item: T, column: keyof T) => ReactNode;
interface selectType {
  value: string;
  text: string;
}

export interface EnhancedTableProps<T extends DataItem> extends ITableProps<T> {
  cellRenderers?: Partial<Record<keyof T, CellRenderer<T>>>;
  columnOrder?: (keyof T)[];
  columnLabels?: Partial<Record<keyof T, string>>;
  pageList: selectType[];
  setPage: React.Dispatch<React.SetStateAction<string>>;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}

export function TableComponent<T extends DataItem>({
  tableData,
  currentPage,
  totalPages,
  onPageChange,
  cellRenderers = {},
  columnOrder,
  columnLabels = {},
  onRowClick,
  pageList,
  setPage,
  selectedIds,
  setSelectedIds,
}: EnhancedTableProps<T>) {
  if (tableData.length === 0) return <div>No data available</div>;

  const columns = columnOrder || (Object.keys(tableData[0]) as (keyof T)[]);

  const formatColumnName = (name: string) => {
    return (
      columnLabels[name as keyof T] ||
      name.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
        return str.toUpperCase();
      })
    );
  };

  const renderCellContent = (item: T, column: keyof T) => {
    if (cellRenderers[column]) {
      return cellRenderers[column]!(item, column);
    }

    return String(item[column]);
  };

  const handleCheckboxChange = (id: string, isChecked: boolean) => {
    setSelectedIds((prevSelectedIds) => {
      if (isChecked) {
        return [...prevSelectedIds, id];
      } else {
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      }
    });
  };

  const handleSelectAllChange = (isChecked: boolean) => {
    if (isChecked) {
      const allIds = tableData
        .map((item) => item.id)
        .filter((id): id is string => id !== undefined);
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-md overflow-hidden bg-white">
        <Table className="">
          <TableHeader className="border border-[#EBEFF2] text-[#1A1619] bg-white">
            <TableRow className="border-none">
              <TableHead className="py-[15.5px] font-bold text-sm pl-6">
                <Checkbox
                  checked={
                    tableData.length > 0 &&
                    selectedIds.length === tableData.length
                  }
                  onCheckedChange={(value) => handleSelectAllChange(!!value)}
                  aria-label="Select all rows"
                />
              </TableHead>

              {columns.map((column, index) => (
                <TableHead
                  className={cn(
                    "py-[15.5px] font-bold text-sm",
                    index === 0 ? "pl-6" : ""
                  )}
                  key={String(column)}
                >
                  {formatColumnName(String(column))}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((item, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="border-b border-gray-50 cursor-pointer hover:bg-accent-nuetral text-sm"
              >
                <TableCell className="py-4 pl-6">
                  <Checkbox
                    checked={selectedIds.includes(String(item.id))}
                    onCheckedChange={(value) =>
                      handleCheckboxChange(String(item.id), !!value)
                    }
                    aria-label="Select row"
                  />
                </TableCell>

                {columns.map((column, colIndex) => (
                  <TableCell
                    className={cn(
                      "py-4 text-[#111827]",
                      colIndex === 0 ? "pl-6" : ""
                    )}
                    key={String(column)}
                  >
                    {renderCellContent(item, column)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between items-center p-3 border border-[#EBEFF2] shadow-lg">
          <div className="flex gap-4 items-center">
            <p className="text-[#808080] text-xs">Rows per page</p>
            <div className="w-[89px] ">
              <SelectFilter
                setFilter={setPage}
                list={pageList}
                placeholder="10"
                height="32px"
              />
            </div>
          </div>
          <Pagination
            currentPage={currentPage || 1}
            totalPages={totalPages || 3}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}
