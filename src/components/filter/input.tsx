"use client";

import type { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

export function InputFilter({
  placeholder = "Name/Phone no / Location",
  setQuery,
}: {
  placeholder?: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Input
      placeholder={placeholder}
      onChange={async (event: ChangeEvent<HTMLInputElement>) =>
        setQuery(event.target.value)
      }
      type="search"
      className="ps-11 h-12 w-[240px] rounded-md bg-white"
    />
  );
}
