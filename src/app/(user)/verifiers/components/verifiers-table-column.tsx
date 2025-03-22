"use client";

import { TableComponent } from "@/components/custom-table";
import { Badge } from "@/components/ui/badge";
import { verifierData } from "@/constants";
import { VerifiersData } from "@/types";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

const VerifiersTable: React.FC = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState<string>("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageList = [
    {
      text: "10",
      value: "10",
    },
    {
      text: "20",
      value: "20",
    },
    {
      text: "30",
      value: "30",
    },
  ];
  const cellRenderers = {
    firstName: (item: VerifiersData) => <p>{item.firstName}</p>,
    lastName: (item: VerifiersData) => <p>{item.lastName}</p>,
    phoneNumber: (item: VerifiersData) => <p>{item.phoneNumber}</p>,
    partner: (item: VerifiersData) => <p>{item.partner}</p>,
    location: (item: VerifiersData) => <p>{item.location}</p>,
    status: (item: VerifiersData) => (
      <Badge
        variant={
          item?.status.toLowerCase() === "active"
            ? "success"
            : item?.status.toLowerCase() === "deactivated"
            ? "destructive"
            : "warning"
        }
        className="py-1 px-2 text-sm"
      >
        {item.status}
      </Badge>
    ),
    action: () => <MoreHorizontal size={24} color="#333333" />,
  };

  const columnOrder: (keyof VerifiersData)[] = [
    "firstName",
    "lastName",
    "phoneNumber",
    "partner",
    "location",
    "status",
    "action",
  ];

  const columnLabels = {
    firstName: "First Name",
    lastName: "Last Name",
    phoneNumber: "Phone Number",
    partner: "Partner",
    location: "Location",
    status: "Status",
  };

  return (
    <>
      <TableComponent<VerifiersData>
        tableData={verifierData}
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={Math.ceil(30 / pageSize)}
        cellRenderers={cellRenderers}
        columnOrder={columnOrder}
        columnLabels={columnLabels}
        setPage={setPageCount}
        pageList={pageList}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    </>
  );
};

export default VerifiersTable;
