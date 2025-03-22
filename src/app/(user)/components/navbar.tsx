"use client";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { NotificationIcon } from "../../../../public/icons";

const Navbar: React.FC = () => {
  return (
    <section
      className={cn(
        "flex items-center justify-between border-b border-[#E9EAEC] px-[35px] py-[29px] sticky top-0 z-10 bg-white"
      )}
    >
      <div className={cn("flex items-center gap-6 justify-between w-full")}>
        <h5 className="font-bold text-2xl text-[#1A1619] flex items-center gap-2 me-auto">
          Verifiers{" "}
          <span className="h-6 w-6 rounded-full bg-[#F2FAFF] font-normal flex items-center justify-center text-xs text-[#039BF0]">
            11
          </span>
        </h5>
        <div className="relative w-6 h-6 flex items-center justify-center">
          <NotificationIcon />
          <div className="w-2 h-2 rounded-full bg-[#E03137] absolute top-[3px] right-[1px] border border-white"></div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="custom"
              className="flex items-center gap-2"
              size="xl"
            >
              <Image
                src="/images/user-avatar.png"
                height={44}
                width={44}
                alt="User avatar"
                className="h-11 w-11 rounded-full border-[#F2FAFF]"
              />
              <ChevronDown className="ml-auto text-[#111827]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="hover:bg-[#F1F1F1] font-medium text-sm text-black">
              Active Verifiers bbgbghfhfhfhfhgfhfh
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#F1F1F1] font-medium text-sm">
              Pending Verifiers
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#F1F1F1] font-medium text-sm">
              Deactivated Verifiers
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default Navbar;
