import { ReactNode } from "react";

export type CellValue =
  | string
  | number
  | boolean
  | Date
  | null
  | undefined
  | ReactNode;

export interface DataItem {
  [key: string]: CellValue;
  id?: string | number;
}

export interface ITableProps<T extends DataItem> {
  tableData: T[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  statusKey?: keyof T;
  onRowClick?: (item: T) => void;
}

export interface VerifiersData extends DataItem {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  partner: string;
  location: string;
  status: string;
}

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
