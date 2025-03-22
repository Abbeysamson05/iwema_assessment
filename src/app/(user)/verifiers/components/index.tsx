"use client";

import { InputFilter } from "@/components/filter/input";
import { SelectFilter } from "@/components/filter/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import VerifiersTable from "./verifiers-table-column";

const Verifiers: React.FC = () => {
  const [selectVerifierFilter, setSelectVerifierFilter] = useState<string>("");
  const [searchVerifierFilter, setSearchVerifierFilter] = useState<string>("");
  const verifierSelectList = [
    {
      text: "All",
      value: "all",
    },
    {
      text: "Active Verifiers",
      value: "active",
    },
    {
      text: "Pending Verifiers",
      value: "pending",
    },
    {
      text: "Deactivated Verifiers",
      value: "deactivated",
    },
  ];
  return (
    <section>
      <div className="flex items-center justify-between gap-4 mb-8 w-full">
        <div className="me-auto">
          <SelectFilter
            list={verifierSelectList}
            setFilter={setSelectVerifierFilter}
            placeholder="All"
          />
        </div>
        <InputFilter setQuery={setSearchVerifierFilter} />
        <Button className="text-sm font-normal" size="lg">
          <Plus className="text-white" size={24} /> Add New Verifier
        </Button>
      </div>
      <VerifiersTable />
    </section>
  );
};

export default Verifiers;
